import { selectors } from "./config";
import { getWait } from "@utils/getWait";
import { getOptionsSimulateTrustedClick } from "./lib";

export const run = async () => {
  let getLikeButton = () => document.querySelectorAll(selectors.likeButton);

  let l = 0;

  for (; getLikeButton().length; ) {
    let likeButton = getLikeButton()[0].closest("button");

    if (!likeButton) continue;

    likeButton?.scrollIntoView({ behavior: "smooth" });

    await getWait(1000, 2e3);

    const optionsSimulateTrustedClick =
      getOptionsSimulateTrustedClick(likeButton);

    console.log("before+++", optionsSimulateTrustedClick);
    const res = await chrome.runtime.sendMessage({
      type: "sex",
      optionsSimulateTrustedClick,
    });

    console.log("after+++", res);

    console.log(`[${new Date().toLocaleTimeString()}] поставили лайк ${++l}`);
  }

  document.querySelector(selectors.lastCard)?.scrollIntoView();

  await getWait(1000, 2e3);
  run();
};
