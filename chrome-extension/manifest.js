import fs from "node:fs";
import deepmerge from "deepmerge";

const packageJson = JSON.parse(fs.readFileSync("../package.json", "utf8"));

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = deepmerge(
  {
    manifest_version: 3,
    /**
     * if you want to support multiple languages, you can use the following reference
     * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization
     */
    name: "__MSG_extensionName__",
    version: packageJson.version,
    description: "__MSG_extensionDescription__",
    // host_permissions: ["<all_urls>", "*://*/*"],
    host_permissions: ['https://pure.app/app/en/feed'],
    permissions: [
      "storage",
      "scripting",
      "tabs",
      "notifications",
      "debugger",
      "webNavigation",
      "activeTab",
    ],
    options_page: "options/index.html",
    background: {
      service_worker: "background.iife.js",
      type: "module",
    },
    action: {
      default_popup: "popup/index.html",
      default_icon: "icon-34.png",
    },
    chrome_url_overrides: {
      newtab: "new-tab/index.html",
    },
    icons: {
      128: "icon-128.png",
    },
    content_scripts: [
      {
        // matches: ["http://*/*", "https://*/*", "<all_urls>"],
        matches: ['https://pure.app/app/en/feed'],
        js: ["content/index.iife.js"],
      },
      {
        matches: ['https://pure.app/app/en/feed'],
        js: ["content-ui/index.iife.js"],
      },
      {
        matches: ['https://pure.app/app/en/feed'],
        css: ["content.css"], // public folder
      },
    ],
    // devtools_page: 'devtools/index.html',
    web_accessible_resources: [
      {
        resources: [
          "*.js",
          "*.css",
          "*.svg",
          "icon-128.png",
          "icon-34.png",
          "manifest.json",
        ],
        matches: ["*://pure.app/*"],
      },
    ],
  },
  {
    side_panel: {
      default_path: "side-panel/index.html",
    },
    permissions: ["sidePanel"],
  }
);

export default manifest;
