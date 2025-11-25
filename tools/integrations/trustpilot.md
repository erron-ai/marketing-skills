# Trustpilot

Consumer review platform — collecting and displaying verified customer reviews to build brand credibility and drive purchase decisions.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Trustpilot Business API |
| MCP | - | Not available |
| CLI | ✓ | See clis/trustpilot.js |
| SDK | - | Use API directly |

## Authentication

- **API Key + Secret**: Created in Trustpilot Developer Portal
- **Access Token**: OAuth 2.0 via client credentials flow

## Common Agent Operations

### Get business unit reviews

```bash
GET https://api.trustpilot.com/v1/business-units/{business_unit_id}/reviews?perPage=20
Authorization: Bearer {access_token}
```

### Send review invitation

```bash
POST https://invitations.trustpilot.com/api/v1/private/business-units/{business_unit_id}/invitations
Authorization: Bearer {access_token}

{
  "consumerEmail": "customer@example.com",
  "consumerName": "Alex Rivera",
  "referenceId": "order_abc123",
  "locale": "en-US",
  "senderEmail": "reviews@yourcompany.com"
}
```

### Get aggregate ratings

```bash
GET https://api.trustpilot.com/v1/business-units/{business_unit_id}
Authorization: Bearer {access_token}
```

Returns: trust score, star distribution, total review count.

## Review Generation Best Practices

- Invite customers at the moment of satisfaction (immediately after delivery, after a successful outcome)
- Personalize the invitation email — higher open rates lead to higher review rates
- Make it one click from the email to the review form

## Relevant Skills

- page-cro
- email-sequence
