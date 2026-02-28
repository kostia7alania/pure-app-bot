import { OptionsSimulateTrustedClick } from "../../../types";

export const simulateTrustedClickOnPosition = ({
  x,
  y,
  button = "left",
}: OptionsSimulateTrustedClick) => {
  chrome.tabs.query(
    { active: true, lastFocusedWindow: true },
    (tabs) => {
      const target = { tabId: tabs[0].id };

      chrome.debugger.attach(target, "1.2", () => {
        console.log(1);
        chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
          type: "mouseMoved",
          x,
          y,
        });
        console.log(2);

        chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
          type: "mousePressed",
          button,
          x,
          y,
          clickCount: 1,
        });

        console.log(3);
        chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
          type: "mouseReleased",
          button,
          x,
          y,
          clickCount: 1,
        });
        console.log(4);
      });
    }
  );
  console.log("finis");
};
