import { Smiley } from "@models";
import { smileys } from "./constants";

export const useGetSmileys = (smileDisplayCount: number) => {
  const filterMap = {
    5: () => true,
    4: (s: Smiley) => s.id !== "neutral",
    3: (s: Smiley) => s.id !== "good" && s.id !== "bad",
    2: (s: Smiley) => s.id !== "good" && s.id !== "bad" && s.id !== "neutral",
  };

  const filteredSmileys = smileys.filter(
    filterMap[smileDisplayCount as keyof typeof filterMap]
  );

  return filteredSmileys;
};
