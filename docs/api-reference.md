---
sidebar_position: 2
---

# API Reference

Complete reference for all UUIDify API endpoints.

## Base URL

```
https://api.uuidify.io
```

## Endpoints

### Generate UUID v1

Time-based UUID with MAC address component.

```bash
GET /v1
```

**Example Request:**
```bash
curl https://api.uuidify.io/v1
```

**Example Response:**
```json
{
  "uuid": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  "version": "v1",
  "timestamp": "2025-11-19T18:31:38.123Z"
}
```

---

### Generate UUID v4

Random UUID (most commonly used).

```bash
GET /v4
```

**Example Request:**
```bash
curl https://api.uuidify.io/v4
```

**Example Response:**
```json
{
  "uuid": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "version": "v4",
  "timestamp": "2025-11-19T18:31:38.123Z"
}
```

---

### Generate UUID v6

Reordered time-based UUID (sortable).

```bash
GET /v6
```

**Example Request:**
```bash
curl https://api.uuidify.io/v6
```

**Example Response:**
```json
{
  "uuid": "1d19dad6-ba7b-6810-80b4-00c04fd430c8",
  "version": "v6",
  "timestamp": "2025-11-19T18:31:38.123Z"
}
```

---

### Generate UUID v7

Unix timestamp-based UUID (recommended for databases).

```bash
GET /v7
```

**Example Request:**
```bash
curl https://api.uuidify.io/v7
```

**Example Response:**
```json
{
  "uuid": "018c3f5c-7f3a-7000-8000-0123456789ab",
  "version": "v7",
  "timestamp": "2025-11-19T18:31:38.123Z"
}
```

---

## Response Fields

All endpoints return a JSON object with the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | The generated UUID in standard format |
| `version` | string | The UUID version (v1, v4, v6, or v7) |
| `timestamp` | string | ISO 8601 timestamp of generation |

## Rate Limiting

UUIDify currently does not enforce rate limits for public usage. However, we recommend:

- Implementing client-side caching when appropriate
- Using bulk generation for high-volume needs
- Contacting us for enterprise requirements

## Error Responses

In case of errors, the API returns appropriate HTTP status codes:

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request (invalid parameters) |
| 429 | Too Many Requests (rate limit exceeded) |
| 500 | Internal Server Error |

**Example Error Response:**
```json
{
  "error": "Invalid UUID version",
  "message": "Supported versions: v1, v4, v6, v7"
}
```

## Using SDKs

For easier integration, use our official SDKs:

### Go SDK

```go
import "github.com/ilkereroglu/uuidify-go"

client := uuidify.NewClient()
uuid, err := client.GenerateV4()
```

### Python SDK

```python
from uuidify import Client

client = Client()
uuid = client.generate_v4()
```

## Support

- [GitHub Issues](https://github.com/ilkereroglu/uuidify/issues)
- [Status Page](https://status.uuidify.io)
- [Dashboard](https://dashboard.uuidify.io)
