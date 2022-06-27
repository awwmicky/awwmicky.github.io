# SEO Checklist

## Embed Metadata

- title: max 70 char
- description
  - 2 ~ 4 sentences
  - max 200 char
- image
  - 1.91:1 aspect ratio
  - 200x150, 600x315, 900x472.5, 1200x630
  - 1.5 * #
  - 1mb ~ 5mb
- thumbnail
  - 2:1 aspect ratio
  - 300x157
  - 5mb -
  - jpg, png, webp, gif
- resize thumbnail
  - ideal :: 600x300 | 1200x630

---

- google analytics
- google tag manager
- google adsense

---

- https://devhints.io/html-meta
- https://www.matuzo.at/blog/html-boilerplate/
- https://gist.github.com/lancejpollard/1978404

- seo card
  - https://cards-dev.twitter.com/validator
  - https://developers.facebook.com/tools/debug/
  - https://www.linkedin.com/post-inspector/inspect/
  - https://developers.pinterest.com/tools/url-debugger/
  - https://en.rakko.tools/tools/9/
  - https://search.google.com/test/rich-results
  - https://validator.schema.org/

```html
<!-- Minimal -->
<link rel="icon" type="image/png" href="favicon@32.png">
<link rel="icon" sizes="192x192" href="icon@192.png">
<link rel="apple-touch-icon" href="icon@152.png">
<meta name="msapplication-square310x310logo" content="icon@310.png">
<!-- Apple -->
<link rel="apple-touch-icon" href="touch-icon-iphone.png">
<link rel="apple-touch-icon" sizes="76x76" href="touch-icon-ipad.png">
<link rel="apple-touch-icon" sizes="120x120" href="touch-icon-iphone-retina.png">
<link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad-retina.png">
<!-- Microsoft -->
<meta name="msapplication-square70x70logo" content="icon_smalltile.png">
<meta name="msapplication-square150x150logo" content="icon_mediumtile.png">
<meta name="msapplication-wide310x150logo" content="icon_widetile.png">
```

---

## for client meta tags || link tags
```html
<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />
<meta name="designer" content="">
<meta name="copyright" content="">
<meta name="owner" content="">

<meta name="fb:page_id" content="43929265776" />
<meta name="og:email" content="me@example.com"/>
<meta name="og:phone_number" content="650-123-4567"/>

<link rel="fluid-icon" type="image/png" href="/fluid-icon.png" />
<link rel="me" type="text/html" href="http://google.com/profiles/thenextweb"/>
```