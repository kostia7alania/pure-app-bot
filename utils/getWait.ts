const getRandomNumber = (min: number, max: number) => {
  return ~~(Math.random() * (max - min + 1)) + min;
};

export const getWait = (fromMs = 100, toMs: undefined | number = 0) => {
  const waitTime = toMs ? getRandomNumber(fromMs, toMs) : fromMs;

  return new Promise((res) => setTimeout(res, waitTime));
};

export const getWaitCancellable = (ms = 100) => {
  let cancel = () => {};

  const promise = new Promise((res, rej) => {
    setTimeout(res, ms);
    cancel = rej;
  });

  return {
    promise,
    cancel,
  };
};
