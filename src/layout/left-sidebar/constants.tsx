import {
  Calendar,
  CircleDot,
  FileType,
  Image,
  Info,
  MessageSquarePlus,
  Mic,
  Smile,
  SquareCheckBig,
} from "lucide-react";

const strokeWidth = 1;
const iconWidth = 24;

export const questionTypes = [
  {
    id: "smiley-rating",
    icon: <Smile strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Smiley rating",
  },
  {
    id: "voice-feedback",
    icon: <Mic strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Voice feedback",
  },
  {
    id: "single-choice",
    icon: <CircleDot strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Single choice",
  },
  {
    id: "multiple-choice",
    icon: <SquareCheckBig strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Multiple choice",
  },
  {
    id: "media-file",
    icon: <Image strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Media file",
  },
  {
    id: "date-option",
    icon: <Calendar strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Date option",
  },
  {
    id: "text-input",
    icon: <FileType strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Text input",
  },
  {
    id: "free-text",
    icon: <MessageSquarePlus strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Free text",
  },
  {
    id: "information",
    icon: <Info strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Information",
  },
];
