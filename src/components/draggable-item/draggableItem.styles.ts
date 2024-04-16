import { colors } from "@constants";
import React from "react";

const wrapper: React.CSSProperties = {
  border: `1px solid ${colors.grey}`,
  borderRadius: 6,
  padding: "8px 4px",
  cursor: "move",
};

const label: React.CSSProperties = { fontSize: 12 };

export default { wrapper, label };
