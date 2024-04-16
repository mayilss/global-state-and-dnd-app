import { colors } from "@constants";
import React from "react";

const wrapper: React.CSSProperties = {
  width: "100%",
  border: `1px dashed ${colors.grey}`,
  height: 100,
};

const text: React.CSSProperties = { color: colors.grey };

export default { wrapper, text };
