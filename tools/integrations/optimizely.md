# Optimizely

Enterprise A/B testing and feature flag platform — supports web experimentation, full-stack feature flags, and personalization.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Optimizely REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/optimizely.js |
| SDK | ✓ | JavaScript, Python, Java, Go, Ruby, and more |

## Authentication

- **Personal Access Token**: Found in Optimizely Account Settings
- Pass as `Authorization: Bearer {token}` header

## Common Agent Operations

### List experiments

```bash
GET https://api.optimizely.com/v2/experiments?project_id={project_id}
Authorization: Bearer {token}
```

### Get experiment results

```bash
GET https://api.optimizely.com/v2/experiments/{experiment_id}/results
Authorization: Bearer {token}
```

### Create an experiment

```bash
POST https://api.optimizely.com/v2/experiments
Authorization: Bearer {token}

{
  "project_id": "{project_id}",
  "name": "Homepage CTA Test",
  "type": "a/b",
  "status": "not_started",
  "variations": [
    {"name": "Control", "weight": 5000},
    {"name": "Variant A — New CTA Copy", "weight": 5000}
  ]
}
```

## Full-Stack Feature Flags (SDK)

```javascript
const optimizely = createInstance({ sdkKey: '{sdk_key}' });

const decision = optimizely.decide(userContext, 'new_checkout_flow');

if (decision.enabled) {
  showNewCheckout();
} else {
  showOriginalCheckout();
}
```

## When to Use

- Enterprise teams running controlled experiments across web and backend
- Products using feature flags for safe rollouts and kill switches
- Organizations with dedicated CRO or growth experimentation teams

## Relevant Skills

- ab-test-setup
- page-cro
- analytics-tracking
