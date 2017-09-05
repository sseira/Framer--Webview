require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Webview":[function(require,module,exports){
var WebView,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

WebView = (function(superClass) {
  extend(WebView, superClass);

  function WebView(options) {
    this.options = options != null ? options : {};
    if (this.url == null) {
      this.url = 'https://www.youtube.com/embed/u4RjCmeuWDU';
    }
    this.container = this.options.container ? this.options.container : new Layer({
      frame: Screen.frame,
      name: 'container'
    });
    WebView.__super__.constructor.call(this, this.options);
    this.scrollHorizontal = false;
    this.parent = this.options.container;
    this.page = new Layer({
      parent: this.content,
      width: this.width,
      height: this.height,
      backgroundColor: 'white',
      ignoreEvents: false,
      html: "<iframe width='" + this.width + "' height='" + this.height + "' src='" + this.options.url + "' allowfullscreen frameborder='0' scrolling='yes'></iframe>"
    });
    this.iframe = this.page.querySelector('iframe');
    this.setContainer(this.container);
  }

  WebView.define('url', {
    get: function() {
      return this.options.url;
    },
    set: function(value) {
      return this.options.url = value;
    }
  });

  WebView.define('container', {
    get: function() {
      return this.options.container;
    },
    set: function(value) {
      return this.options.container = value;
    }
  });

  WebView.prototype.setUrl = function(url) {
    this.url = url;
    return this.iframe.src = url;
  };

  WebView.prototype.setContainer = function(container) {
    this.container = container;
    this.parent = this.container;
    this.height = this.container.height;
    this.width = this.container.width;
    this.iframe.height = this.container.height;
    this.iframe.width = this.container.width;
    this.page.height = this.container.height;
    this.page.width = this.container.width;
    this.content.height = this.container.height;
    return this.content.width = this.container.width;
  };

  return WebView;

})(ScrollComponent);

module.exports = WebView;


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NzZWlyYS9EZXNrdG9wL0ZyYW1lciBNb2R1bGVzL1dlYnZpZXcuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvc3NlaXJhL0Rlc2t0b3AvRnJhbWVyIE1vZHVsZXMvV2Vidmlldy5mcmFtZXIvbW9kdWxlcy9XZWJ2aWV3LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiMgV2Vic2l0ZSBtdXN0IGFsbG93IFgtT1JJR04gcmVxdWVzdHNcbiMgdGFrZXMgYSB1cmw6IFN0cmluZyAmIGEgY29udGFpbmVyOiBMYXllclxuXG5jbGFzcyBXZWJWaWV3IGV4dGVuZHMgU2Nyb2xsQ29tcG9uZW50IFxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPiBcblx0XHRAdXJsID89ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC91NFJqQ21ldVdEVSdcblx0XHRAY29udGFpbmVyID0gaWYgQG9wdGlvbnMuY29udGFpbmVyIHRoZW4gQG9wdGlvbnMuY29udGFpbmVyIGVsc2UgbmV3IExheWVyXG5cdFx0XHRmcmFtZTogU2NyZWVuLmZyYW1lXG5cdFx0XHRuYW1lOiAnY29udGFpbmVyJ1xuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0QC5zY3JvbGxIb3Jpem9udGFsID0gZmFsc2Vcblx0XHRALnBhcmVudCA9IEBvcHRpb25zLmNvbnRhaW5lclxuXHRcdEAucGFnZSA9IG5ldyBMYXllclxuXHRcdFx0cGFyZW50OiBALmNvbnRlbnRcblx0XHRcdHdpZHRoOiBALndpZHRoXG5cdFx0XHRoZWlnaHQ6IEAuaGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcblx0XHRcdGlnbm9yZUV2ZW50czogZmFsc2UgXG5cdFx0XHRcdFx0XHRcblx0XHRcdGh0bWw6IFwiPGlmcmFtZSB3aWR0aD0nI3tALndpZHRofScgaGVpZ2h0PScje0AuaGVpZ2h0fScgc3JjPScje0BvcHRpb25zLnVybH0nIGFsbG93ZnVsbHNjcmVlbiBmcmFtZWJvcmRlcj0nMCcgc2Nyb2xsaW5nPSd5ZXMnPjwvaWZyYW1lPlwiXG5cdFx0QGlmcmFtZSA9ICBALnBhZ2UucXVlcnlTZWxlY3RvcignaWZyYW1lJylcblx0XHRAc2V0Q29udGFpbmVyKEBjb250YWluZXIpXG5cdFx0ICAgICAgICAgICAgICBcblx0QGRlZmluZSAndXJsJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy51cmxcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLnVybCA9IHZhbHVlXG5cdFx0XHRcblx0QGRlZmluZSAnY29udGFpbmVyJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5jb250YWluZXJcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmNvbnRhaW5lciA9IHZhbHVlXG5cdFx0XHRcblx0c2V0VXJsOiAodXJsKSAtPlxuXHRcdEB1cmwgPSB1cmxcblx0XHRAaWZyYW1lLnNyYyA9IHVybFxuXHRcdFxuXHRzZXRDb250YWluZXI6IChjb250YWluZXIpIC0+XG5cdFx0QGNvbnRhaW5lciA9IGNvbnRhaW5lclxuXHRcdEAucGFyZW50ID0gQGNvbnRhaW5lclxuXHRcdEAuaGVpZ2h0ID0gQGNvbnRhaW5lci5oZWlnaHRcblx0XHRALndpZHRoID0gIEBjb250YWluZXIud2lkdGhcblx0XHRAaWZyYW1lLmhlaWdodCA9IEBjb250YWluZXIuaGVpZ2h0XG5cdFx0QGlmcmFtZS53aWR0aCA9IEBjb250YWluZXIud2lkdGhcblx0XHRALnBhZ2UuaGVpZ2h0ID0gQGNvbnRhaW5lci5oZWlnaHRcblx0XHRALnBhZ2Uud2lkdGggPSBAY29udGFpbmVyLndpZHRoXG5cdFx0QC5jb250ZW50LmhlaWdodCA9IEBjb250YWluZXIuaGVpZ2h0XG5cdFx0QC5jb250ZW50LndpZHRoID0gQGNvbnRhaW5lci53aWR0aFxuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlZpZXdcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FER0EsSUFBQSxPQUFBO0VBQUE7OztBQUFNOzs7RUFDUSxpQkFBQyxPQUFEO0lBQUMsSUFB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
