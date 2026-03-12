# Crisp

Business messaging platform for live chat, chatbots, and customer conversations. Use the API to manage conversations, enrich contacts, trigger behavioral messages, and pull support analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1 |
| MCP | - | Not available |
| CLI | ✓ | See clis/crisp.js |
| SDK | ✓ | `crisp-api` (Node.js) |

## Authentication

```bash
CRISP_API_IDENTIFIER=your_identifier   # From Crisp dashboard → Settings → API
CRISP_API_KEY=your_api_key
CRISP_WEBSITE_ID=your_website_id
```

## Key Concepts

**Website**: A Crisp workspace (each product/domain has its own website ID)
**Conversation**: A support thread between a user and your team
**Contact**: A user profile with attributes, history, and behavioral data
**Segment**: A tag applied to contacts for grouping and targeting
**Campaign**: An automated or manual message sent to a segment
**Event**: A behavioral trigger sent from your product (like a custom analytics event)

## Common Operations

### List recent conversations

```javascript
const Crisp = require('crisp-api');
const CrispClient = new Crisp();
CrispClient.authenticate(
  process.env.CRISP_API_IDENTIFIER,
  process.env.CRISP_API_KEY
);

const conversations = await CrispClient.website.listConversations(
  process.env.CRISP_WEBSITE_ID,
  1  // page number
);
```

### Get conversation details

```javascript
const conversation = await CrispClient.website.getConversation(
  websiteId,
  sessionId
);
console.log({
  status: conversation.status,
  email: conversation.meta.email,
  messages: conversation.messages
});
```

### Search contacts by email

```javascript
const contacts = await CrispClient.website.searchPeopleProfiles(
  websiteId,
  { email: 'user@company.com' }
);
```

### Update contact attributes

```javascript
await CrispClient.website.updatePeopleProfile(websiteId, peopleId, {
  person: {
    nickname: 'Jane Smith',
    email: 'jane@company.com'
  },
  company: {
    name: 'Acme Corp',
    url: 'https://acme.com',
    employees: 50
  }
});
```

### Add a segment to a contact

```javascript
await CrispClient.website.addPeopleSegment(websiteId, peopleId, 'churned');
```

### Send a proactive message to a contact

```javascript
await CrispClient.website.sendMessageInConversation(
  websiteId,
  sessionId,
  {
    type: 'text',
    content: 'Hey! I noticed you haven\'t set up your first workflow yet. Need help?',
    from: 'operator',
    origin: 'chat'
  }
);
```

### Track a behavioral event

Use Crisp's JavaScript SDK in-product to track events:
```javascript
// Client-side (in-product)
$crisp.push(['set', 'session:event', [
  [['trial_started', { plan: 'pro', source: 'pricing_page' }]]
]]);
```

## Marketing Use Cases

**Onboarding support**
- Identify users who haven't completed key setup steps (from event data)
- Trigger proactive chat messages for stuck users
- Segment contacts by product usage stage

**Churn prevention**
- Monitor low-engagement contacts (no events in 7 days)
- Trigger win-back conversations before trial expiration
- Add "at-risk" segment to contacts showing churn signals

**Contact enrichment**
- Sync company data from CRM to Crisp contact profiles
- Add segments based on plan, industry, or usage tier
- Pull conversation history for customer success context

**Conversation analytics**
- Count unresolved conversations older than 24 hours
- Track response time by operator
- Identify common support topics for FAQ or documentation

## Related Skills

- `churn-prevention`: Use Crisp behavioral events to trigger save campaigns
- `onboarding-cro`: Instrument key onboarding steps as Crisp events and trigger help messages
- `email-sequence`: Sync Crisp segments to email platform for lifecycle campaigns
