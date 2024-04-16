import { colors } from "@constants";
import React from "react";

const wrapper: React.CSSProperties = {
  padding: "8px 16px 0px 16px",
  backgroundColor: colors.white,
  borderBottom: "1px solid #f3f3f3",
};

const tabBar: React.CSSProperties = { margin: 0 };

export default {
  wrapper,
  tabBar,
};
