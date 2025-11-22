# Hotjar

Behavioral analytics tool with heatmaps, session recordings, and on-site surveys to understand how users interact with your site.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Hotjar Connect API (surveys and responses) |
| MCP | - | Not available |
| CLI | ✓ | See clis/hotjar.js |
| SDK | - | JavaScript tracking script |

## Authentication

- **API Key**: Found in Hotjar Settings → API

## Common Agent Operations

### Get survey responses

```bash
GET https://api.hotjar.com/v3/sites/{site_id}/surveys/{survey_id}/responses
Authorization: Bearer {api_key}
```

### List surveys for a site

```bash
GET https://api.hotjar.com/v3/sites/{site_id}/surveys
Authorization: Bearer {api_key}
```

## Installing Hotjar Tracking

```html
<script>
(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:{site_id},hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## Triggering Session Recording for Specific Users

```javascript
// Record sessions for users on a specific plan
if (user.plan === 'trial') {
  hj('identify', user.id, { plan: user.plan });
  hj('trigger', 'trial_user_session');
}
```

## Key Capabilities

- **Heatmaps**: Aggregated click, move, and scroll maps per page
- **Session recordings**: Watch real user sessions — find rage clicks, confusion, and drop-off
- **Feedback widgets**: Collect in-the-moment ratings and open-text feedback
- **On-site surveys**: NPS, CSAT, and custom surveys triggered by behavior or timing

## When to Use

- Diagnosing why a page isn't converting with visual evidence
- Understanding what users do before they abandon a flow
- Collecting qualitative feedback to complement quantitative analytics

## Relevant Skills

- page-cro
- ab-test-setup
- signup-flow-cro
