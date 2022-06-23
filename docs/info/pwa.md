# Progressive Web App (on Parcel)

- [ ] learn cache strategy & implementation

---

- parcel dependencies
  - https://www.npmjs.com/package/parcel-plugin-sw-cache
  - https://www.npmjs.com/package/parcel-plugin-pwa-manifest
  - https://www.npmjs.com/package/parcel-plugin-browserconfig

- steps
  - if you have internet
  - if you are on localhost
  - if it is installed
  - if it is registered or updated

- consider
  - file location
  - generate favicon for webmanifest
  - does it include window/microsoft favicon size?
  - apply service worker or workbox-cli
  - how to setup build?
  - offline image (svg)
  - offline.html
  - 404.html

- links
  - life cycle
    - https://web.dev/service-worker-lifecycle/
    - https://developer.chrome.com/docs/workbox/service-worker-lifecycle/
    - https://medium.com/walmartglobaltech/service-worker-lifecycle-20333ccd570a
    - https://www.digitalocean.com/community/tutorials/demystifying-the-service-worker-lifecycle
    - https://medium.com/@vipulnema2610/understanding-service-worker-life-cycle-b6580aa4eb50
  - cache strategy
    - https://developer.chrome.com/docs/workbox/caching-strategies-overview/
    - https://blog.bitsrc.io/5-service-worker-caching-strategies-for-your-next-pwa-app-58539f156f52
    - https://blog.bitsrc.io/understanding-service-workers-and-caching-strategies-a6c1e1cbde03
  - google workbox
    - https://developer.chrome.com/docs/workbox/modules/workbox-cli/
  - other
    - https://www.bha.ee/how-to-make-your-parcel-js-app-progressive/
    - https://github.com/zuixjs/zuix-html-pwa/blob/master/source/sw.js

---

## Genral Understanding

- Client Side (UI, web app)
- Server Side (service worker : cache | network)
  - proxy worker, intercept network request
  - respond accordingly, provide offline user experience