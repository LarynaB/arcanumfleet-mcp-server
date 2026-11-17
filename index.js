#!/usr/bin/env node
const readline = require("readline");
const ENDPOINT = "https://arcanumfleet.com/mcp";

const rl = readline.createInterface({ input: process.stdin, terminal: false });
rl.on("line", async (line) => {
  if (!line.trim()) return;
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: line,
    });
    const text = await res.text();
    process.stdout.write(text + "\n");
  } catch (err) {
    process.stderr.write(String(err) + "\n");
  }
});
