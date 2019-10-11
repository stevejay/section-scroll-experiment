import React from "react";

const useRefsMap = (sections, idProp) => {
  const refsMap = React.useMemo(
    () =>
      sections.reduce((acc, section) => {
        acc[section[idProp]] = React.createRef();
        return acc;
      }, {}),
    [sections, idProp]
  );

  return refsMap;
};

export default useRefsMap;
