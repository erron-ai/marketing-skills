# Salesforce

Enterprise CRM platform for managing complex sales processes, large account bases, and multi-team revenue operations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API, SOQL query, Bulk API |
| MCP | - | Not available |
| CLI | ✓ | Salesforce CLI (sf) built-in |
| SDK | ✓ | jsforce (Node), simple-salesforce (Python) |

## Authentication

- **OAuth 2.0**: Standard for connected apps
- **Username/Password flow**: For server-to-server integrations (use connected app)

## Common Agent Operations

### Query records with SOQL

```bash
GET https://{instance}.salesforce.com/services/data/v57.0/query?q=SELECT+Id,Name,StageName,Amount+FROM+Opportunity+WHERE+StageName='Closed Won'+ORDER+BY+CloseDate+DESC+LIMIT+10
Authorization: Bearer {access_token}
```

### Create a lead

```bash
POST https://{instance}.salesforce.com/services/data/v57.0/sobjects/Lead/
Authorization: Bearer {access_token}

{
  "FirstName": "Alex",
  "LastName": "Rivera",
  "Email": "alex@example.com",
  "Company": "Acme Corp",
  "LeadSource": "Web",
  "Status": "New"
}
```

### Update an opportunity stage

```bash
PATCH https://{instance}.salesforce.com/services/data/v57.0/sobjects/Opportunity/{id}/
Authorization: Bearer {access_token}

{"StageName": "Proposal/Price Quote", "Amount": 24000}
```

## Key Objects

- **Lead**: Unqualified prospect before they enter the pipeline
- **Contact**: A person associated with an Account
- **Account**: A company in the CRM
- **Opportunity**: A potential deal with a stage and close date
- **Campaign**: A marketing initiative with member tracking

## When to Use

- Enterprise organizations with complex, multi-stage sales processes
- Large teams with dedicated sales ops to maintain the system
- Companies that need deep integration with CPQ, service cloud, or marketing cloud

## Relevant Skills

- revops
- sales-enablement
