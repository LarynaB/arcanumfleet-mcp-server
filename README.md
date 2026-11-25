# ArcanumFleet MCP Server (`arcanumfleet-mcp-server`)

[![mcptry](https://mcptry.com/badge/io.github.LarynaB/arcanumfleet-mcp-server)](https://mcptry.com/servers/io.github.LarynaB/arcanumfleet-mcp-server) [![Listed on mcpservers.org](https://mcpservers.org/badge.svg)](https://mcpservers.org/servers/larynab/arcanumfleet-mcp-server)

[![ArcanumFleet MCP server](https://mcprush.com/badge/arcanumfleet-mcp/card.svg)](https://mcprush.com/to/arcanumfleet-mcp?ref=badge)

13-tool **x402 v2** Streamable HTTP & stdio MCP server for Solana trading signals, SPL rug-checks, whale/smart-money concentration, wallet profiling, Jupiter swap quotes, transaction simulation, 10-node Consensus Admiral verdicts, clean web extraction, and fast 0-API-key code audits.

Pay per call in **USDC on Base (`eip155:8453`) or Solana** via HTTP `402 Payment Required` — **0 API keys, 0 subscriptions**.

- **Portal & Live 402 Tester:** https://arcanumfleet.com/x402
- **Streamable HTTP MCP Endpoint:** `POST https://arcanumfleet.com/mcp`
- **npm:** https://www.npmjs.com/package/arcanumfleet-mcp-server
- **x402-list:** https://x402-list.com/services/arcanumfleet
- **x402scan:** https://www.x402scan.com/server/0d8404dc-ff8a-4c79-82ea-56e3841a819f
- **Agent Skill:** https://arcanumfleet.com/skill.md

## Quick Install

### Claude Desktop (`claude_desktop_config.json`)
```json
{
  "mcpServers": {
    "arcanumfleet": {
      "command": "npx",
      "args": ["-y", "arcanumfleet-mcp-server"]
    }
  }
}
```

### Cursor (`.cursor/mcp.json`)
```json
{
  "mcpServers": {
    "arcanumfleet": {
      "url": "https://arcanumfleet.com/mcp"
    }
  }
}
```

## Available Tools (14)

| Tool | Price (USDC) | Purpose |
| :--- | :--- | :--- |
| `arcanum_pulse` | 0.002 | Live sanitized Solana momentum & audit signals |
| `arcanum_audit` | 0.005 | Full Solana SPL rug-check & safety verdict |
| `arcanum_engrams` | 0.01 | Evolved order-flow & risk heuristics |
| `arcanum_consensus_vote` | 0.01 | 10-node Consensus Admiral BUY/SKIP verdict |
| `arcanum_liquidity_check` | 0.002 | DexScreener pool depth, 24h volume & swap readiness |
| `arcanum_smart_money` | 0.005 | Top-10 holder concentration & insider cluster flags |
| `arcanum_social_sentiment` | 0.005 | Live Moltbook + Farcaster narrative pulse |
| `arcanum_jupiter_quote` | 0.002 | Real-time Jupiter swap quote & price impact |
| `arcanum_trending_mints` | 0.002 | Top 10 trending Solana mints by momentum |
| `arcanum_tx_simulate` | 0.005 | Solana RPC tx simulator & SetAuthority risk check |
| `arcanum_code_audit` | 0.001 | Fast 0-API-key code & smart-contract security audit |
| `arcanum_wallet_profile` | 0.003 | Live Solana wallet SOL balance, SPL holdings & whale tier |
| `arcanum_web_extract` | 0.001 | Clean LLM-ready web page text & metadata extractor |
| `arcanum_base_wallet_profile` | 0.002 | Live Base (eip155:8453) ETH/USDC balance, tx count & tier |
