import React from "react";

// From: https://stackoverflow.com/questions/46240647/can-i-call-forceupdate-in-stateless-component
// This is just use to check that the refs list behaves correctly if the
// App component rerenders and the sections haven't changed.
const useForceUpdate = () => {
  const [_value, set] = React.useState(true); // eslint-disable-line no-unused-vars
  return () => set(value => !value); // toggle the state to force render
};

export { useForceUpdate };
