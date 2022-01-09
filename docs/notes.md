# Notes

- parcel: https://parceljs.org/docs/
- hot reload
- production
- development
- images: include optimize image only in production
- svg: hot reload w/ svg is updated
- postcss: find other parts to compile

```
  parcel-optimizer-imagemin
  "optimizers": {
    "*.{png,jpg,jpeg}": ["@parcel/optimizer-imagemin"]
  }

  @tsconfig/recommended
```
## pwa notes
- https://github.com/jtumano/parceljs-pwa
- https://www.bha.ee/how-to-make-your-parcel-js-app-progressive/
- https://www.simicart.com/blog/pwa-manifest/
- https://github.com/parcel-bundler/parcel/issues/3588