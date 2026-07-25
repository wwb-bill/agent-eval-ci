# agent-eval-ci

CI-integrated eval runner for agent chains. Snapshots, failFast, deterministic regression.

```typescript
import { EvalRunner } from "agent-eval-ci";
const r = new EvalRunner();
const report = await r.run({ name: "my-eval", cases: [...] }, myAgentFn);
// report.passed ? exit 0 : exit 1
```

MIT
