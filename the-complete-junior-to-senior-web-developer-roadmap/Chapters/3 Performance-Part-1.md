# 3. Performance Part 1

# 3 Keys To Performance

1. Frontend
    1. Critical Render Path
    2. Optimized Code
    3. Progressive Web App
2. Transfer(Network Performance)
    1. Minimize Files
    2. Minimize Delivery
3. Backend 
    1. CDNs
    2. Caching
    3. Load Balancing
    4. DB Scaling
    5. GZIP

# Network Performance

## Honey I shrunk the files (Reducing the amount of files)

- Minimize Text (JS/CSS/HTML)
    - [https://www.minifier.org/](https://www.minifier.org/)
    - Learn it more in Webpack part
- Minimize Images
    - Image Files (JPG/PNG/SVG/GIF): You want to take right format and compress it as much as possible
        - JPG: for complex colors without transparent background. JPEG-Optimizer to compress images
        - GIF: less colors but less file size that’s why gif is suitable for small animations. TinyPNG to compress images
        - PNG: less colors but less size, and you can add transparency, suitable for logos
        - SVG: something called vector graphics, you can modify with css, but tend to be very simple
        - refs:
            - [https://99designs.com/blog/tips/image-file-types/](https://99designs.com/blog/tips/image-file-types/)
            - [https://pageweight.imgix.com/](https://pageweight.imgix.com/)
            - [https://www.sitepoint.com/gif-png-jpg-which-one-to-use/](https://www.sitepoint.com/gif-png-jpg-which-one-to-use/)
    - Image Optimize
        - Try to choose simple illustration over highly detailed photographs
        - Always Lower JPEG image quality (30 - 60%)
        - Resize image based on size it will be displayed
        - Display different sized images for different screen sizes with media queries ([https://gist.github.com/bartholomej/8415655](https://gist.github.com/bartholomej/8415655))
        - Use CDN like imgix
        - Remove image metadata ([www.verrexif.com/en/ver.php](https://www.verexif.com/en/))

## The traveling delivery man (Reducing the number of transportation frequency)

ref: [https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser](https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser)

# Critical Render Path

[https://excalidraw.com/#json=Pqoc9mPfbExbgXN3VBfNX,bKyeg58CpUm0IvyPtHT-Bw](https://excalidraw.com/#json=Pqoc9mPfbExbgXN3VBfNX,bKyeg58CpUm0IvyPtHT-Bw)

1. HTML: Create a DOM. As soon as it sees external resources, downloading.
    1. Load style tag in the `<head>` 
    2. Load script right before `</body>` 
2. CSS (Render blocking)
    1. Only load whatever is needed
    2. Above the fold loading
    3. Media Attributes
    4. Less Specificity
3. JavaScript
    1. Load Scripts as asynchronously
    2. Defer Loading of scripts
    3. Minimize DOM manipulation
    4. Avoid long running
    
    ref: 
    
    - [https://web.dev/optimizing-content-efficiency-loading-third-party-javascript/](https://web.dev/optimizing-content-efficiency-loading-third-party-javascript/)
    - [https://stackoverflow.com/questions/10808109/script-tag-async-defer](https://stackoverflow.com/questions/10808109/script-tag-async-defer)

# Keiko Website Exercise

- [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- [https://www.webpagetest.org/](https://www.webpagetest.org/)
- [https://youmightnotneedjquery.com/](https://youmightnotneedjquery.com/)
- [https://css-tricks.com/prefetching-preloading-prebrowsing/](https://css-tricks.com/prefetching-preloading-prebrowsing/)
- [https://docs.github.com/en/pages/quickstart](https://docs.github.com/en/pages/quickstart)

# Resources: Performance Tools

- [https://developer.chrome.com/docs/devtools/#activities](https://developer.chrome.com/docs/devtools/#activities)
- [https://developer.chrome.com/docs/devtools/#fps](https://developer.chrome.com/docs/devtools/#fps)
- [https://developer.chrome.com/blog/new-in-devtools-64/#perf-monitor](https://developer.chrome.com/blog/new-in-devtools-64/#perf-monitor)
- [https://developer.chrome.com/docs/devtools/#screenshots](https://developer.chrome.com/docs/devtools/#screenshots)
- [https://developer.chrome.com/docs/devtools/#interactions](https://developer.chrome.com/docs/devtools/#interactions)
- [https://developer.chrome.com/docs/devtools/#scrolling-performance-issues](https://developer.chrome.com/docs/devtools/#scrolling-performance-issues)
- [https://developer.chrome.com/docs/devtools/#paint-flashing](https://developer.chrome.com/docs/devtools/#paint-flashing)
- [https://developer.chrome.com/docs/devtools/#main](https://developer.chrome.com/docs/devtools/#main)

## **Other Resources:**

- [http://optimizilla.com/](http://optimizilla.com/)
- [https://tools.pingdom.com/](https://tools.pingdom.com/)
- [https://www.thinkwithgoogle.com/feature/mobile/](https://www.thinkwithgoogle.com/feature/mobile/)
- [https://developers.google.com/web/tools/lighthouse/](https://developers.google.com/web/tools/lighthouse/)
- [http://websitespeedranker.com/](http://websitespeedranker.com/)
- [https://pageweight.imgix.com/](https://pageweight.imgix.com/?ref=producthunt)
- [https://developers.google.com/speed/pagespeed/insights/](https://developers.google.com/speed/pagespeed/insights/)
- [https://passmarked.com/](https://passmarked.com/?ref=producthunt)
- [https://images.guide/](https://images.guide/)
- [https://www.crazyegg.com/blog/image-editing-tools/](https://www.crazyegg.com/blog/image-editing-tools/)

## **Additional image manipulation tools:**

- [XNConvert](https://www.xnview.com/en/xnconvert/)
- [ImageOptim](https://imageoptim.com/mac)
- [ResizeIt](https://itunes.apple.com/us/app/resizeit/id416280139?mt=12)
- [PicResize](http://www.picresize.com/)
- [Gimp](https://www.gimp.org/)

# HTTP/2

```tsx
const http2 = require('http2');
const fs = require('fs');

const options = {
	key: fs.readFileSync('./selfsigned.key'),
	cert: fs.readFileSync('./selfsigned.crt'),
	allowHTTP1: true;
}

const server = http2.createSecureServer(options, (req, res)=>{
	res.setHeader('Content-Type', 'text/html');
	res.end('ok')
})
```

ref: [https://web.dev/performance-http2/](https://web.dev/performance-http2/)

# HTTP3

ref: [https://blog.cloudflare.com/http3-the-past-present-and-future/](https://blog.cloudflare.com/http3-the-past-present-and-future/)

> everything is trade-off
>