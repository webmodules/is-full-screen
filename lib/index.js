export default function isFullScreen(){
  return document.webkitIsFullScreen
    || document.mozFullScreen
    || document.msFullscreenElement != null;
}
