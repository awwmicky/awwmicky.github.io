# Image Optimize

`Responsive Image Process`

```html
  <picture>
    <source 
      type="image/png" 
      media="(min-width: 600px)"
      srcset="./3-example-lg.png" 
    />
    <source 
      type="image/png" 
      sizes="(min-width: 300px) 50vw, 100vw"
      srcset="./2-example-md.png" 
    />
    <img 
      class="img" 
      src="./1-example-sm.png" 
      alt="testing--image" 
    />
  </picture>
``` 

## Element Options

`<picture>` > `<source>` + `<img>`

- `<picture>` :: parent
- `<source>`
  - type   :: mime-type
  - media  :: (min-width: #px)
    - target image source
  - sizes  :: (min-width: #px) #vw, 100vw (default)
    - change image width
  - srcset :: image path & 1x (resolution) | 300w (width)
- `<img>`
  - required & fallback
  - apply any attributes here

---

## Responsive Design + Web Performance

- e.g. 2mb image
  - mobile, tablet, laptop, desktop
  - basic device, smart device, retina displays
  - considering :: device screen size, screen resolution, & user data plan

- 3 approaches
  - density switching
  - resolution switching
  - art direction

### density switching

- special case :: resolution's screen pixel density
- ppi = image resolution
  - how many pixels displayed per inch of an image?
  - pixel information quality
  - uses fixed width
- resolutions
  - basic == 1x == low resolution (default)
  - smart == 2x == high resolution
  - modern == 3x == higher resolution
- code
  - x descriptors
  - `srcset="./example.png 1x"`

### resolution switching

- use case :: pixel density & layout size
  - helps w/ bandwidth & web performance
  - intrinsic query & width
- image sizes
  - small == 300kb
  - medium == 500kb
  - large == 2mb
- code
  - w descriptors
  - `srcset="./example.png 300w"`

### art direction

- best case :: images serving different devices, crop
  - different image source/data & design choice
  - maximize performance per screen size
  - e.g. landscape, portrait
- overall goal
  - the website will load that one specific image 
  - based on screen size, resolution, & circumstance 

---

## Rendering Strategy

- image file
  - avif :: firefox
  - webp :: chrome, safari
  - jpeg :: any

- image quality
  - @[1x, 2x, 3x]--lg--image
  - @[1x, 2x, 3x]--md--image
  - @[1x, 2x, 3x]--sm--image

- w/ parcel
  - `srcset=[ file path ]`
  - `as=[ file type ]`

---

## Example

- what I need is an image for mobile & desktop
- I want it to be for `avif, webp, & jpg`
- I want it to be for `sm & lg`

```html
<picture>
  <source 
    type="image/avif" 
    media="(min-width: 600px)"
    srcset="
      ../images/query/0--casey.png?as=avif&width=300 300w,
      ../images/query/0--casey.png?as=avif&width=500 500w
    " 
  />
  <source 
    type="image/webp" 
    media="(min-width: 600px)"
    srcset="
      ../images/query/0--casey.png?as=webp&width=300 300w,
      ../images/query/0--casey.png?as=webp&width=500 500w
    " 
  />
  <source 
    type="image/jpeg" 
    media="(min-width: 600px)"
    srcset="
      ../images/query/0--casey.png?as=jpg&width=300 300w,
      ../images/query/0--casey.png?as=jpg&width=500 500w
    " 
  />
  <img 
    class="img" 
    src="../images/query/0--casey.png?width=300" 
    alt="testing--image" 
  />
</picture>

<!-- === OR === -->

<picture>
  <source 
    type="image/png" 
    media="(min-width: 1440px)"
    srcset="../images/query/2--april.png" 
  />
  <source 
    type="image/png" 
    media="(min-width: 768px)"
    srcset="../images/query/1--splinter.png" 
  />
  <source 
    type="image/png" 
    srcset="../images/query/0--casey.png" 
  />
  <img 
    class="img" 
    src="../images/query/0--casey.png" 
    alt="testing--image" 
  />
</picture>
```