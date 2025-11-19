---
sidebar_position: 1
---

# Introduction

Welcome to **UUIDify** - the ultra-fast, serverless UUID generation API built on Cloudflare Workers.

## What is UUIDify?

UUIDify is an open-source, serverless API that provides instant generation of globally unique identifiers (UUIDs). Built on Cloudflare's edge network, it offers near-zero latency and high availability worldwide.

## Quick Start

Getting started with UUIDify is simple. No authentication required for basic usage:

```bash
# Generate a UUID v4 (default)
curl https://api.uuidify.io/v4

# Generate a UUID v7 (timestamp-based)
curl https://api.uuidify.io/v7
```

### Response Format

All endpoints return JSON with the following structure:

```json
{
  "uuid": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "version": "v4",
  "timestamp": "2025-11-19T18:31:38.123Z"
}
```

## Supported UUID Versions

UUIDify supports multiple UUID versions for different use cases:

- **v1**: Time-based UUIDs with MAC address
- **v4**: Random UUIDs (most common)
- **v6**: Reordered time-based UUIDs (sortable)
- **v7**: Unix timestamp-based UUIDs (recommended for databases)

## Why UUIDify?

- **⚡ Lightning Fast**: Powered by Cloudflare Workers with global edge deployment
- **🌐 Serverless**: No infrastructure to manage, infinitely scalable
- **🔐 Open Source**: Fully transparent and community-driven
- **📦 SDK Support**: Official client libraries for Go and Python
- **🆓 Free to Use**: No API keys required for basic usage

## Next Steps

- Learn about all available endpoints in the [API Reference](./api-reference.md)
- Check out our [Go SDK](https://github.com/ilkereroglu/uuidify-go)
- Check out our [Python SDK](https://github.com/ilkereroglu/uuidify-python)
- Visit the [Dashboard](https://dashboard.uuidify.io) for advanced features
- View the [source code](https://github.com/ilkereroglu/uuidify) on GitHub
