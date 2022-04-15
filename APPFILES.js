const VERSION = "0.1.12"; // THIS MUST BE CHANGED HERE
const CACHEAPPBASE = "cacheApp";
const CACHEAPP = "cacheApp" + VERSION;
const appFiles = [
  /* APP specific files */
  "modules/PWA-API/PWA-API.js",
  "manifest.json",
  "TilePieces.png",
  "tilepieces-screenshot.jpg",
  "TilePieces_maskable_icon.png",
  /* tilepieces files */
  "modules/tilepieces/codeMirror-editor/index.html",
  "modules/tilepieces/codeMirror-editor/index-pop.html",
  "modules/tilepieces/codeMirror-editor/front.js",
  "modules/tilepieces/codeMirror-editor/components/codeMirror-editor/panel-bundle/codeMirror-editor.bundle.css",
  "modules/tilepieces/codeMirror-editor/components/codeMirror-editor/panel-bundle/codeMirror-editor.bundle.js",
  "modules/tilepieces/colorpicker/colorpicker.html",
  "modules/tilepieces/colorpicker/colorpicker-pop.html",
  "modules/tilepieces/colorpicker/front.js",
  "modules/tilepieces/colorpicker/components/colorpicker/panel/colorpicker.bundle.js",
  "modules/tilepieces/component-panel/component-panel.html",
  "modules/tilepieces/component-panel/component-panel-pop.html",
  "modules/tilepieces/component-panel/bundle/component-panel.bundle.css",
  "modules/tilepieces/component-panel/bundle/component-panel.bundle.js",
  "modules/tilepieces/css-input/image_plus_icon.svg",
  "modules/tilepieces/css-viewer/html/css-viewer.html",
  "modules/tilepieces/css-viewer/html/css-viewer-pop.html",
  "modules/tilepieces/css-viewer/bundle/css-viewer.bundle.css",
  "modules/tilepieces/css-viewer/bundle/css-viewer.bundle.js",
  "modules/tilepieces/framework/tilepieces-framework.bundle.css",
  "modules/tilepieces/framework/tilepieces-framework.bundle.js",
  "modules/tilepieces/html-inspector/index.html",
  "modules/tilepieces/html-inspector/index-pop.html",
  "modules/tilepieces/html-inspector/bundle/html-inspector.bundle.css",
  "modules/tilepieces/html-inspector/bundle/html-inspector.bundle.js",
  "modules/tilepieces/package-manager/index.html",
  "modules/tilepieces/package-manager/index-pop.html",
  "modules/tilepieces/package-manager/bundle/package-manager.bundle.css",
  "modules/tilepieces/package-manager/bundle/package-manager.bundle.js",
  "modules/tilepieces/panel-history/panel-history.html",
  "modules/tilepieces/panel-history/panel-history-pop.html",
  "modules/tilepieces/panel-history/bundle/tilepieces.panel-history.bundle.css",
  "modules/tilepieces/panel-history/bundle/tilepieces.panel-history.bundle.js",
  "modules/tilepieces/project-explorer/project-explorer.html",
  "modules/tilepieces/project-explorer/bundle/project-explorer.bundle.css",
  "modules/tilepieces/project-explorer/bundle/project-explorer.bundle.js",
  "modules/tilepieces/terser/terser.bundle.min.js",
  "modules/tilepieces/jszip/jszip.min.js",
  "modules/tilepieces/element-panel/element-panel.html",
  "modules/tilepieces/element-panel/element-panel-pop.html",
  "modules/tilepieces/element-panel/bundle/element-panel.bundle.css",
  "modules/tilepieces/element-panel/bundle/element-panel.bundle.js",
  "modules/tilepieces/element-panel/tag-components/TABLE/css.css",
  "modules/tilepieces/element-panel/tag-components/TABLE/interface.html",
  "modules/tilepieces/element-panel/tag-components/TABLE/table.bundle.js",
  "modules/tilepieces/screen-dimensions-panel/screen-dimensions.html",
  "modules/tilepieces/screen-dimensions-panel/components/screen-dimensions-panel/bundle/screen-dimensions-panel.bundle.css",
  "modules/tilepieces/screen-dimensions-panel/components/screen-dimensions-panel/bundle/screen-dimensions-panel.bundle.js",
  "modules/tilepieces/tabs/svg-ico-freccia.svg",
  "modules/tilepieces/stylesheet/svg-summary.svg",
  "modules/tilepieces/stylesheet/svg-circle-info.svg",
  "modules/tilepieces/stylesheet/svg-info.svg",
  "index.html",
  "tp-favi.png",
  "tp-favi-180.png",
  "modules/tilepieces/project-tree/svg/svg-folder-ico.svg",
  "modules/tilepieces/project-tree/svg/svg-file.svg",
  "modules/tilepieces/project-tree/arrow.svg"
];