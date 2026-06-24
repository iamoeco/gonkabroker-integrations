# Upstream listing: Gonka Broker as a Vercel AI SDK community provider

This folder holds our **upstream contribution** to [`vercel/ai`](https://github.com/vercel/ai)
to list Gonka Broker on the official [Community Providers](https://ai-sdk.dev/providers/community-providers)
page. It is a record/source-of-truth only — the actual PR is opened from a throwaway fork
of `vercel/ai` (this folder is not consumed by any build here).

The published package itself lives in `../../` (`@gonkabroker/ai-sdk-provider`, on npm).

## What the PR changes (exactly 2 files in `vercel/ai`)

1. **NEW** — `content/providers/05-community-providers/52-gonkabroker.mdx`
   - Source: [`52-gonkabroker.mdx`](./52-gonkabroker.mdx) in this folder.
   - `52` = next free numeric prefix (main block ends at 51; recent providers append
     at the end). Re-check the live folder before committing in case it shifted.
   - The URL slug derives from the filename minus the prefix → `/providers/community-providers/gonkabroker`.

2. **MODIFY** — `content/docs/02-foundations/02-providers-and-models.mdx`
   - Add the single line from [`02-providers-and-models.snippet.md`](./02-providers-and-models.snippet.md)
     to the open-source providers list.

No data/registry file is needed: the `<CommunityModelCards />` component on the
community-providers index page picks up provider pages from the folder automatically.
(Verified against merged PR vercel/ai#11500.)

## PR

**Title:**
```
docs: add Gonka Broker community provider
```

**Body:**
```markdown
Adds documentation for the Gonka Broker community provider
(`@gonkabroker/ai-sdk-provider`) — OpenAI-compatible access to open-source
models on the decentralized Gonka network, built on `@ai-sdk/openai-compatible`.

- New provider page under `05-community-providers/`.
- Added to the open-source providers list in `02-providers-and-models.mdx`.

npm: https://www.npmjs.com/package/@gonkabroker/ai-sdk-provider
Source: https://github.com/gonkabroker/gonkabroker-integrations/tree/master/vercel-ai-sdk
```

## How to submit (GitHub web, no local clone needed)

1. Fork `vercel/ai`.
2. In the fork create a branch, e.g. `docs/add-gonkabroker-provider`.
3. Add file #1 (rename `NN` to the next free number) and edit file #2.
4. Open a PR against `vercel/ai:main` with the title/body above.

## Status

- [x] PR opened — https://github.com/vercel/ai/pull/16325
- [ ] Merged
