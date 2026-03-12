# Linear

Product and project management tool popular with engineering and product teams. Use the API to track marketing roadmap items, manage launch checklists, sync campaign milestones, and report on cross-functional project status.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | GraphQL API |
| MCP | ✓ | Available via Linear MCP server |
| CLI | ✓ | See clis/linear.js |
| SDK | ✓ | `@linear/sdk` (Node.js) |

## Authentication

```bash
LINEAR_API_KEY=lin_api_xxxx   # from linear.app/settings/api
```

## Key Concepts

**Team**: A group of people working on a shared project area (e.g., Marketing, Engineering)
**Project**: A time-bounded initiative with milestones and issues
**Issue**: An individual task or work item (has status, priority, assignee, labels)
**Cycle**: A sprint or iteration period for a team
**Label**: A tag on issues for categorization (e.g., "campaign", "launch", "content")
**Workflow State**: Status in the team's workflow (e.g., "Todo", "In Progress", "Done")

## Common Operations

### List all issues for a team

```javascript
const { LinearClient } = require('@linear/sdk');
const linearClient = new LinearClient({ apiKey: process.env.LINEAR_API_KEY });

const issues = await linearClient.issues({
  filter: {
    team: { key: { eq: 'MKT' } },
    state: { name: { in: ['In Progress', 'Todo'] } }
  }
});
```

### Create a new issue

```javascript
const issue = await linearClient.createIssue({
  teamId: 'team-id',
  title: 'Write Q4 launch email sequence',
  description: 'Draft 5-email sequence for the December product launch',
  priority: 2,  // 1=Urgent, 2=High, 3=Medium, 4=Low
  labelIds: ['label-id-campaign'],
  dueDate: '2025-12-10'
});
```

### Get issues for a project

```javascript
const project = await linearClient.project('project-id');
const issues = await project.issues();
```

### Update issue status

```javascript
await linearClient.updateIssue(issueId, {
  stateId: 'done-state-id'
});
```

### Search issues by title or description

```javascript
const results = await linearClient.issueSearch('launch checklist');
```

### List all projects

```javascript
const projects = await linearClient.projects({
  filter: { team: { key: { eq: 'MKT' } } }
});
for await (const project of projects) {
  console.log({ id: project.id, name: project.name, progress: project.progress });
}
```

### Get cycle (sprint) issues

```javascript
const team = await linearClient.team('team-id');
const activeCycle = await team.activeCycle;
if (activeCycle) {
  const issues = await activeCycle.issues();
}
```

## Marketing Use Cases

**Launch checklist management**
- Create a Linear project for each major product launch
- Use issues for every launch task: copy, emails, social posts, PR, ads
- Track progress in real time across marketing, product, and engineering

**Campaign milestone tracking**
- Create issues for campaign milestones (creative approved, live, reporting done)
- Use labels to group issues by campaign or quarter
- Report on completed vs. overdue items weekly

**Marketing roadmap**
- Maintain a `MKT` team in Linear for marketing initiatives
- Prioritize items by quarter using projects and milestones
- Share roadmap with executive team via Linear's roadmap view

**Cross-functional coordination**
- Create issues that span marketing and engineering (e.g., tracking implementation)
- Assign engineering tasks to eng team, marketing tasks to marketing team, in one project
- Use Linear's GitHub integration to link code changes to marketing feature requests

## Rate Limits

Linear's GraphQL API enforces complexity-based rate limits. Standard usage (< 1000 requests/hour) is well within limits.

## Related Skills

- `launch-strategy`: Use Linear to track all launch tasks across teams
- `analytics-tracking`: Create Linear issues for tracking implementation tasks
- `content-strategy`: Track content production pipeline in Linear
