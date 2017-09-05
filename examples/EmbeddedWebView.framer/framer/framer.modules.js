require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"WebView":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NzZWlyYS9Ecm9wYm94IChJREVPKS9Tb2Z0d2FyZSBQbGF5Z3JvdW5kL0ZyYW1lci9XZWJ2aWV3L0VtYmVkZGVkV2ViVmlldy5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9zc2VpcmEvRHJvcGJveCAoSURFTykvU29mdHdhcmUgUGxheWdyb3VuZC9GcmFtZXIvV2Vidmlldy9FbWJlZGRlZFdlYlZpZXcuZnJhbWVyL21vZHVsZXMvV2ViVmlldy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIjIFdlYnNpdGUgbXVzdCBhbGxvdyBYLU9SSUdOIHJlcXVlc3RzXG4jIHRha2VzIGEgdXJsOiBTdHJpbmcgJiBhIGNvbnRhaW5lcjogTGF5ZXJcblxuY2xhc3MgV2ViVmlldyBleHRlbmRzIFNjcm9sbENvbXBvbmVudCBcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT4gXG5cdFx0QHVybCA/PSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdTRSakNtZXVXRFUnXG5cdFx0QGNvbnRhaW5lciA9IGlmIEBvcHRpb25zLmNvbnRhaW5lciB0aGVuIEBvcHRpb25zLmNvbnRhaW5lciBlbHNlIG5ldyBMYXllclxuXHRcdFx0ZnJhbWU6IFNjcmVlbi5mcmFtZVxuXHRcdFx0bmFtZTogJ2NvbnRhaW5lcidcblx0XHRzdXBlciBAb3B0aW9uc1xuXHRcdEAuc2Nyb2xsSG9yaXpvbnRhbCA9IGZhbHNlXG5cdFx0QC5wYXJlbnQgPSBAb3B0aW9ucy5jb250YWluZXJcblx0XHRALnBhZ2UgPSBuZXcgTGF5ZXJcblx0XHRcdHBhcmVudDogQC5jb250ZW50XG5cdFx0XHR3aWR0aDogQC53aWR0aFxuXHRcdFx0aGVpZ2h0OiBALmhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG5cdFx0XHRpZ25vcmVFdmVudHM6IGZhbHNlIFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRodG1sOiBcIjxpZnJhbWUgd2lkdGg9JyN7QC53aWR0aH0nIGhlaWdodD0nI3tALmhlaWdodH0nIHNyYz0nI3tAb3B0aW9ucy51cmx9JyBhbGxvd2Z1bGxzY3JlZW4gZnJhbWVib3JkZXI9JzAnIHNjcm9sbGluZz0neWVzJz48L2lmcmFtZT5cIlxuXHRcdEBpZnJhbWUgPSAgQC5wYWdlLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpXG5cdFx0QHNldENvbnRhaW5lcihAY29udGFpbmVyKVxuXHRcdCAgICAgICAgICAgICAgXG5cdEBkZWZpbmUgJ3VybCcsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMudXJsXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAb3B0aW9ucy51cmwgPSB2YWx1ZVxuXHRcdFx0XG5cdEBkZWZpbmUgJ2NvbnRhaW5lcicsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMuY29udGFpbmVyXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAb3B0aW9ucy5jb250YWluZXIgPSB2YWx1ZVxuXHRcdFx0XG5cdHNldFVybDogKHVybCkgLT5cblx0XHRAdXJsID0gdXJsXG5cdFx0QGlmcmFtZS5zcmMgPSB1cmxcblx0XHRcblx0c2V0Q29udGFpbmVyOiAoY29udGFpbmVyKSAtPlxuXHRcdEBjb250YWluZXIgPSBjb250YWluZXJcblx0XHRALnBhcmVudCA9IEBjb250YWluZXJcblx0XHRALmhlaWdodCA9IEBjb250YWluZXIuaGVpZ2h0XG5cdFx0QC53aWR0aCA9ICBAY29udGFpbmVyLndpZHRoXG5cdFx0QGlmcmFtZS5oZWlnaHQgPSBAY29udGFpbmVyLmhlaWdodFxuXHRcdEBpZnJhbWUud2lkdGggPSBAY29udGFpbmVyLndpZHRoXG5cdFx0QC5wYWdlLmhlaWdodCA9IEBjb250YWluZXIuaGVpZ2h0XG5cdFx0QC5wYWdlLndpZHRoID0gQGNvbnRhaW5lci53aWR0aFxuXHRcdEAuY29udGVudC5oZWlnaHQgPSBAY29udGFpbmVyLmhlaWdodFxuXHRcdEAuY29udGVudC53aWR0aCA9IEBjb250YWluZXIud2lkdGhcblxubW9kdWxlLmV4cG9ydHMgPSBXZWJWaWV3XG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10s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
