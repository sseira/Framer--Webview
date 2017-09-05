# Framer Video Player Module

A [Framer](http://framerjs.com) module that makes it simple to drop integrate and interact with a webpage into any prototype.

## Installation

1. Grab `WebView.coffee` from this repo's `/modules` directory
2. Put it into your Framer Studio project's  `/modules` directory. 
3. Then, in your Framer prototype, require the module with this line:

```coffeescript
WebView = require "WebView"
```
---

## Examples

#### [Basic WebView](https://framer.cloud/bJaaH)

Demonstrates the default fullscreen webview.

#### [Embedded WebView](https://framer.cloud/sZmlI)

Demonstrates a webview inside a custom container.

---

## Usage

### Creating a WebView

Simply put, the WebView module is a superlayer that wraps up an html [<iframe>](https://www.w3schools.com/tags/tag_iframe.asp) and takes care of the configuration for you

To create a WebView instance simply add:

```coffeescript
myWebView = new WebView
  url: 'http://www.linkToWebsite.com'
  container: myContainer
```

if container is not specified, the the WebView will take up the whole Screen

** url must be for a website that allows X-Origin requests unless you host your protoype on your own server as a proxy to bypass this
