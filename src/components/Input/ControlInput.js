import React, { useState } from "react";

import ControlInputContext from "contexts/ControlInputContext";

const ControlInput = ({ isValid, children, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ControlInputContext.Provider value={{ isFocused, setIsFocused, isValid }}>
      <div {...props}>{children}</div>
    </ControlInputContext.Provider>
  );
};

export default ControlInput;
