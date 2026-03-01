import { selectors } from "./config";
import { getWait } from "@utils/getWait";
import { getOptionsSimulateTrustedClick } from "./lib";

export const useAutoLikes = () => {
  let likes = ref(0);
  let isStarted = ref(false);

  const runLikingCallback = async () => {
    let getLikeButton = () => document.querySelectorAll(selectors.likeButton);

    for (; getLikeButton().length; ) {
      if (!isStarted.value) return console.warn("[STOP] exited by !isStarted");

      let likeButton = getLikeButton()[0].closest("button");

      if (!likeButton) {
        console.log('!likeButton')
        continue 
      }

      likeButton?.scrollIntoView({ behavior: "smooth" });

      await getWait(1000, 2e3);

      const optionsSimulateTrustedClick =
        getOptionsSimulateTrustedClick(likeButton);

      console.log("optionsSimulateTrustedClick", optionsSimulateTrustedClick);

      const res = await chrome.runtime.sendMessage({
        type: "sex",
        optionsSimulateTrustedClick,
      });

      console.log("res ->", res);

      likes.value += 1;
      console.log(
        `[${new Date().toLocaleTimeString()}] поставили лайк -> ${likes.value}`,
      );
    }

    document.querySelector(selectors.lastCard)?.scrollIntoView();

    await getWait(1000, 2e3);
    runLikingCallback();
  };

  const runLiking = () => {
    isStarted.value = true;
    runLikingCallback();
  };

  const stopLiking = () => {
    isStarted.value = false;
  };

  return {
    likes,
    isStarted,
    runLiking,
    stopLiking,
  };
};
