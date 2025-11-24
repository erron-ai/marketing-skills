#!/usr/bin/env node

/**
 * Generic marketing tool CLI.
 * Usage: <tool> <resource> <action> [--id value] [--data '{"k":"v"}']
 */

const path = require('path');

const TOOL_NAME = path.basename(process.argv[1], '.js');
const ENV_PREFIX = TOOL_NAME.toUpperCase().replace(/-/g, '_');
const API_ENV = `${ENV_PREFIX}_API_KEY`;
const BASE_ENV = `${ENV_PREFIX}_BASE_URL`;

function parseFlags(argv) {
  const flags = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) {
      flags[key] = true;
      continue;
    }
    flags[key] = next;
    i += 1;
  }
  return flags;
}

function methodForAction(action) {
  const byAction = {
    list: 'GET',
    get: 'GET',
    search: 'GET',
    create: 'POST',
    send: 'POST',
    track: 'POST',
    run: 'POST',
    update: 'PATCH',
    delete: 'DELETE'
  };
  return byAction[action] || 'GET';
}

function buildPath(resource, action, flags) {
  if (resource === 'health' && action === 'check') return '/health';
  if ((action === 'get' || action === 'update' || action === 'delete') && flags.id) {
    return `/${resource}/${flags.id}`;
  }
  return `/${resource}/${action}`;
}

async function request({ baseUrl, apiKey, method, pathValue, payload }) {
  const response = await fetch(`${baseUrl}${pathValue}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: payload && method !== 'GET' ? JSON.stringify(payload) : undefined
  });

  const text = await response.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }

  return { ok: response.ok, status: response.status, body };
}

function usage() {
  console.log(JSON.stringify({
    tool: TOOL_NAME,
    usage: `${TOOL_NAME} <resource> <action> [--id value] [--data json]`,
    env: [API_ENV, BASE_ENV],
    examples: [
      `${TOOL_NAME} campaigns list`,
      `${TOOL_NAME} contacts get --id 123`,
      `${TOOL_NAME} events track --data '{"name":"trial_started"}'`
    ]
  }, null, 2));
}

async function main() {
  const [, , resource, action, ...rest] = process.argv;
  if (!resource || !action) {
    usage();
    process.exit(1);
  }

  const apiKey = process.env[API_ENV];
  if (!apiKey) {
    console.error(JSON.stringify({ error: `Missing ${API_ENV}` }, null, 2));
    process.exit(1);
  }

  const flags = parseFlags(rest);
  const method = methodForAction(action);
  const pathValue = buildPath(resource, action, flags);
  const baseUrl = process.env[BASE_ENV] || `https://api.${TOOL_NAME}.com`;

  let payload = null;
  if (flags.data) {
    try {
      payload = JSON.parse(flags.data);
    } catch (error) {
      console.error(JSON.stringify({ error: 'Invalid --data JSON', detail: String(error) }, null, 2));
      process.exit(1);
    }
  }

  const result = await request({ baseUrl, apiKey, method, pathValue, payload });

  console.log(JSON.stringify({
    tool: TOOL_NAME,
    request: { method, baseUrl, path: pathValue, payload },
    response: result
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main().catch((error) => {
  console.error(JSON.stringify({ error: String(error) }, null, 2));
  process.exit(1);
});
