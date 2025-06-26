<p align="center">
  <a href="https://nfti.ai">
    <img alt="NFTI" src="/docs/media/nfti-header.jpg" width="308">
  </a>
</p>

<p align="center">
  <em>NFTI your AI Agents & Virtual IP. Bridging intelligent agents, MCP protocols, and RWA to create a new era of digital sovereignty.</em>
</p>

<p align="center">
  <a href="https://github.com/your-org/nfti/actions/workflows/main.yml"><img alt="Build Status" src="https://github.com/your-org/nfti/actions/workflows/main.yml/badge.svg" /></a>
  <a href="https://www.npmjs.com/package/@nfti/core"><img alt="NPM" src="https://img.shields.io/npm/v/@nfti/core.svg" /></a>
  <a href="https://github.com/your-org/nfti/blob/main/license"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue" /></a>
  <a href="https://prettier.io"><img alt="Prettier Code Formatting" src="https://img.shields.io/badge/code_style-prettier-brightgreen.svg" /></a>
</p>

# NFTI <!-- omit from toc -->

* [Intro](#intro)

  * [Combining RWA, MCP, and Agents](#combining-rwa-mcp-and-agents)
* [Features](#features)
* [Docs](#docs)
* [AI SDKs](#ai-sdks)
* [Tools](#tools)
* [Contributors](#contributors)
* [License](#license)

## Intro

NFTI is a **standard library and execution framework for AI agents** optimized for integration with **MCP (Model Context Protocol)** and **RWA (Real World Assets)** infrastructure. With TypeScript-native support and deep compatibility with major AI SDKs, NFTI makes it easy to build composable, sovereign, and utility-backed AI-powered digital entities.

NFTI clients, such as `IdentityClient` or `RWARegistryClient`, work seamlessly as:

* TypeScript-first agent modules
* AI tools callable by LLMs through MCP-compatible adapters

```ts
import { IdentityClient } from '@nfti/core'

const identity = new IdentityClient()
const profile = await identity.getProfile({ id: 'nfti.eth' })
console.log(profile)
```

Or invoke them as agentic tools via your favorite AI SDK:

```ts
import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import { createAISDKTools } from '@nfti/ai-sdk'
import { IdentityClient } from '@nfti/core'

const identity = new IdentityClient()

const result = await generateText({
  model: openai('gpt-4o'),
  tools: createAISDKTools(identity),
  toolChoice: 'required',
  prompt: 'Who owns the NFT with ID nfti:0xabc123?'
})

console.log(result.toolResults[0])
```

### Combining RWA, MCP, and Agents

All NFTI tools are built to be composable via `MCP` adapters, meaning they can interact across agent boundaries, context layers, and RWA registries — enabling LLMs to transact, query, and coordinate real-world and digital assets.

```ts
import { RWARegistryClient, MCPGatewayClient } from '@nfti/core'
import { createAISDKTools } from '@nfti/ai-sdk'

const rwa = new RWARegistryClient()
const mcp = new MCPGatewayClient()

const tools = createAISDKTools(rwa, mcp)
```

## Features

* ✅ Built for digital sovereignty and agent identity
* ✅ Fully MCP-compatible
* ✅ Supports programmable RWA infrastructure
* ✅ Composable agent architecture
* ✅ Clean TypeScript DX + LLM tool UX
* ✅ Uses `fetch` + `ky` for robust HTTP behavior
* ✅ CLI for OpenAPI → agent tool conversion
* ✅ 100% open source and modular

## Docs

Full documentation is available at [nfti.ai](https://nfti.ai).

## AI SDKs

NFTI tools support all major LLM toolchain SDKs:

* [Vercel AI SDK](https://nfti.ai/sdks/ai-sdk)
* [LangChain](https://nfti.ai/sdks/langchain)
* [LlamaIndex](https://nfti.ai/sdks/llamaindex)
* [Firebase Genkit](https://nfti.ai/sdks/genkit)
* [OpenAI SDK](https://nfti.ai/sdks/openai)
* [MCP Gateway](https://nfti.ai/tools/mcp)

## Tools

NFTI includes composable clients and functions for:

* Digital Identity & Sovereignty (DID, ENS, etc.)
* RWA Registries & Provenance
* On-chain + Off-chain Asset Interactions
* MCP Gateways & Federated Context
* Virtual IP Management

See the [NFTI Tools Directory](https://nfti.ai/tools) for the full list.

## Contributors

* [Your Name or Team](https://x.com/yourhandle)
* Inspired by [@transitive\_bs](https://x.com/transitive_bs)
* Open to [community contributions](https://github.com/your-org/nfti/graphs/contributors)

<p align="center">
  <a href="https://github.com/your-org/nfti/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=your-org/nfti&max=150" width="600" />
  </a>
</p>

## License

MIT © [Your Name or Org](https://x.com/yourhandle)
