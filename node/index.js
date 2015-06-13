"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isFullScreen;

function isFullScreen() {
  return document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement != null;
}

module.exports = exports["default"];

