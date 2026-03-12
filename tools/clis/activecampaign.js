#!/usr/bin/env node

/**
 * activecampaign CLI
 * Usage: activecampaign <resource> <action> [--flag value] [--data '{"k":"v"}']
 */

const TOOL_NAME = 'activecampaign';
const API_ENV = 'ACTIVECAMPAIGN_API_KEY';
const BASE_ENV = 'ACTIVECAMPAIGN_BASE_URL';

function parseFlags(argv) {
  const flags = {};
  for (let idx = 0; idx < argv.length; idx += 1) {
    const token = argv[idx];
    if (!token.startsWith('--')) continue;
    const key = token.slice(2);
    const next = argv[idx + 1];
    if (!next || next.startsWith('--')) {
      flags[key] = true;
      continue;
    }
    flags[key] = next;
    idx += 1;
  }
  return flags;
}

function methodForAction(action) {
  const table = {
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
  return table[action] || 'GET';
}

function buildPath(resource, action, flags) {
  if (resource === 'health' && action === 'check') {
    return '/health';
  }
  if ((action === 'get' || action === 'update' || action === 'delete') && flags.id) {
    return `/${resource}/${flags.id}`;
  }
  return `/${resource}/${action}`;
}

async function request(baseUrl, apiKey, method, path, payload) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const response = await fetch(`${baseUrl}${path}`, {
    method,
    headers,
    body: payload && method !== 'GET' ? JSON.stringify(payload) : undefined
  });

  const text = await response.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }

  return {
    status: response.status,
    ok: response.ok,
    body
  };
}

function usage() {
  console.log(JSON.stringify({
    tool: TOOL_NAME,
    usage: `${TOOL_NAME} <resource> <action> [--id value] [--data json] [--query value]`,
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

  const baseUrl = process.env[BASE_ENV] || `https://api.${TOOL_NAME}.com`;
  const flags = parseFlags(rest);
  const method = methodForAction(action);
  const path = buildPath(resource, action, flags);

  let payload = null;
  if (flags.data) {
    try {
      payload = JSON.parse(flags.data);
    } catch (err) {
      console.error(JSON.stringify({ error: 'Invalid JSON in --data', detail: String(err) }, null, 2));
      process.exit(1);
    }
  }

  const result = await request(baseUrl, apiKey, method, path, payload);

  console.log(JSON.stringify({
    tool: TOOL_NAME,
    request: {
      method,
      baseUrl,
      path,
      payload
    },
    response: result
  }, null, 2));

  if (!result.ok) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(JSON.stringify({ error: String(error) }, null, 2));
  process.exit(1);
});
