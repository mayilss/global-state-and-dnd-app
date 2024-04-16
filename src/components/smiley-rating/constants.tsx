import { colors } from "@constants";
import { Smiley } from "@models";
import { Angry, Frown, Laugh, Meh, Smile } from "lucide-react";

export const smileys: Array<Smiley> = [
  {
    id: "excellent",
    icon: (selected: string) => (
      <Laugh color={selected === "excellent" ? colors.blue : colors.grey} />
    ),
    label: "Excellent",
  },
  {
    id: "good",
    icon: (selected: string) => (
      <Smile color={selected === "good" ? colors.blue : colors.grey} />
    ),
    label: "Good",
  },
  {
    id: "neutral",
    icon: (selected: string) => (
      <Meh color={selected === "neutral" ? colors.blue : colors.grey} />
    ),
    label: "Neutral",
  },
  {
    id: "bad",
    icon: (selected: string) => (
      <Frown color={selected === "bad" ? colors.blue : colors.grey} />
    ),
    label: "Bad",
  },
  {
    id: "unacceptable",
    icon: (selected: string) => (
      <Angry color={selected === "unacceptable" ? colors.blue : colors.grey} />
    ),
    label: "Unacceptable",
  },
];
