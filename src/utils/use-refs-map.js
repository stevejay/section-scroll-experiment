import React from "react";

const useRefsMap = (sections, idKey = "id") => {
  const refsMap = React.useMemo(
    () =>
      sections.reduce((acc, section) => {
        acc[section[idKey]] = React.createRef();
        return acc;
      }, {}),
    [sections, idKey]
  );

  return refsMap;
};

export default useRefsMap;
