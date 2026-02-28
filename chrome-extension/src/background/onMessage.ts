// import { getCurrentTabForBackground } from '@/utils/getCurrentTab'
import { ERequest } from "./../../../types";
// import { useLogging } from '../use/useLogging'
// import { useSyncModel } from '../use/useSyncModel'

const eventsToPass = [
  ERequest.RUN_TASKS,
  ERequest.STOP_TASKS,
  ERequest.IS_IN_PROGRESS,
  ERequest.COUNT,
  ERequest.GET_ACTIVE_TAB,
];

// chrome.tabs.onActivated.addListener((activeInfo) => {
//   useSyncModel(ERequest.ACTIVE_TAB, -1).setModel(activeInfo.tabId)
// })

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("-- [background] [onUpdated] --", { tabId, changeInfo, tab });
  // here u can upd popup model
});

export const onMessage = (request: any, _options, sendResponse) => {
  // if (!eventsToPass.includes(request.type)) return

  console.log("[background] [onMessage]", request.type, request);

  // if (request.type === ERequest.GET_ACTIVE_TAB) {
  //   getCurrentTabForBackground().then(sendResponse)
  //   return true // keep the messaging channel open for sendResponse
  // }

  const opts = { action: request.type, options: request.options };

  const callback = (_response: any) => console.log("-RUN_TASKS-");

  chrome.tabs.sendMessage(request.tabId, opts, callback);

  // return true // keep the messaging channel open for sendResponse
};
