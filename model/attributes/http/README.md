---
namespace: http
brief: Describes HTTP requests and responses, on the client and on the server.
includes:
  - Request and response data (method, status, headers, body, size)
  - The route that the server matched for a request
  - Request timings (browser resource timing phases, server queue time)
excludes:
  - description: The URL that was requested, and its parts
    see: url
  - description: The address and port of the server
    see: server
---
