---
namespace: browser
brief: Describes the browser that runs the page, and what it observed while loading and running the page during one visit.
includes:
  - Information about the browser the browser (name, version, etc)
  - How the browser arrived at the page (navigation type and back/forward cache restores)
  - Paint, performance and web vital timings that the browser measured
  - Data that browser APIs report, such as Reporting API reports and the scripts behind long animation frames
excludes:
  - description: Navigations of a client-side router, in the router's own vocabulary
    see: router
  - description: The URL of the page or of a resource
    see: url
  - description: The timings and sizes of a single HTTP request, including the browser's resource timing
    see: http
---

Attributes in this namespace describe one visit by one browser, so two visitors who load the same page at the same time can get different values.
