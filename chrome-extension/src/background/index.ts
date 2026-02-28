import { OptionsSimulateTrustedClick } from "../../../types";
import { simulateTrustedClickOnPosition } from "./../utils/simulateTrustedClick";
import "webextension-polyfill";
// import { onMessage } from "./onMessage";

console.log("background loaded");
console.log(
  "Edit 'chrome-extension/src/background/index.ts' and save to reload."
);

// chrome.runtime.onMessage.addListener(onMessage);

chrome.runtime.onMessage.addListener(
  (
    {
      type,
      optionsSimulateTrustedClick,
    }: {
      type: string;
      optionsSimulateTrustedClick: OptionsSimulateTrustedClick;
    },
    sender,
    sendResponse
  ) => {
    console.log(
      "[background]",
      { type, optionsSimulateTrustedClick },
      sender,
      sendResponse
    );
    simulateTrustedClickOnPosition(optionsSimulateTrustedClick);

    return 'return val'
  }
);
