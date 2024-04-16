import { Smiley } from "@models";
import React from "react";

export const useGetSmileys = (
  smileys: Array<Smiley>,
  smileDisplayCount: number
) => {
  return React.useCallback(() => {
    switch (smileDisplayCount) {
      case 5:
        return smileys;
      case 4:
        return smileys.filter((s) => s.id !== "neutral");
      case 3:
        return smileys.filter((s) => s.id !== "good" && s.id !== "bad");
      case 2:
        return smileys.filter(
          (s) => s.id !== "good" && s.id !== "bad" && s.id !== "neutral"
        );
      default:
        return [];
    }
  }, [smileDisplayCount]);
};
