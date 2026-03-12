# OneSignal

Cross-platform push notification service for web and mobile — sending notifications to browsers, iOS, and Android from one platform.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | OneSignal REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/onesignal.js |
| SDK | ✓ | JavaScript, iOS, Android, React Native |

## Authentication

- **REST API Key**: Found in OneSignal App Settings → Keys & IDs
- **App ID**: Also from App Settings

## Common Agent Operations

### Send a push notification

```bash
POST https://onesignal.com/api/v1/notifications
Authorization: Basic {rest_api_key}

{
  "app_id": "{app_id}",
  "included_segments": ["Active Users"],
  "headings": {"en": "New feature just launched"},
  "contents": {"en": "You can now export reports as CSV. Try it now →"},
  "url": "https://yourapp.com/reports"
}
```

### Send to a specific user

```bash
POST https://onesignal.com/api/v1/notifications
Authorization: Basic {rest_api_key}

{
  "app_id": "{app_id}",
  "include_external_user_ids": ["user_123"],
  "headings": {"en": "Your trial ends in 3 days"},
  "contents": {"en": "Upgrade now to keep all your data and keep building."},
  "url": "https://yourapp.com/upgrade"
}
```

### Get notification stats

```bash
GET https://onesignal.com/api/v1/notifications/{notification_id}?app_id={app_id}
Authorization: Basic {rest_api_key}
```

## When to Use

- Re-engaging users who aren't opening email
- Real-time product notifications (new message, task assigned)
- Churn prevention — reaching users before trial expires

## Relevant Skills

- onboarding-cro
- churn-prevention
- email-sequence
