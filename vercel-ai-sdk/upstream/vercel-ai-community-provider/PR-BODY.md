PR title:

docs: add Gonka Broker community provider

---
PR body (paste into the vercel/ai PR template, replacing it):

## Background

The Gonka Broker provider for the AI SDK (`@gonkabroker/ai-sdk-provider`) has been
published to npm but isn't yet listed among the community providers. This adds its
documentation so AI SDK users can discover and use it.

## Summary

- Adds a new community provider page
  `content/providers/05-community-providers/52-gonkabroker.mdx`, documenting
  `@gonkabroker/ai-sdk-provider` — OpenAI-compatible access to open-source models
  (Qwen, Kimi, MiniMax, …) on the decentralized Gonka network, built on
  `@ai-sdk/openai-compatible`.
- Adds Gonka Broker to the open-source providers list in
  `content/docs/02-foundations/02-providers-and-models.mdx`.

The package is published as `@gonkabroker/ai-sdk-provider@0.1.0` and verified
end-to-end with `generateText` and `streamText`.

## Checklist

- [x] All commits are signed (PRs with unsigned commits cannot be merged)
- [ ] Tests have been added / updated (for bug fixes / features)
- [x] Documentation has been added / updated (for bug fixes / features)
- [ ] A _patch_ changeset for relevant packages has been added (for bug fixes / features - run `pnpm changeset` in the project root)
- [x] I have reviewed this pull request (self-review)
