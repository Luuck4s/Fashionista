export const getState = () => {
  const state = localStorage.getItem("state");

  if (state !== null) {
    return JSON.parse(state);
  }

  return undefined;
};

export const setState = (state) => {
  const stateToSave = JSON.stringify(state);
  localStorage.setItem("state", stateToSave);
};
