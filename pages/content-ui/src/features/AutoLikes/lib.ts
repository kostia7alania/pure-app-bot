export const getOptionsSimulateTrustedClick = (
    element: HTMLElement,
    button = "left"
  ) => {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    return { x, y, button };
  };
