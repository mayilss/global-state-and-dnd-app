import SmileyRating from "@components/smiley-rating/SmileyRating";
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

export const widgetAreaId = "widget-drop-area";
export const colors = { grey: "#c3c3c3", white: "#fff", blue: " #4096ff" };

const strokeWidth = 1;
const iconWidth = 24;

export const questionTypes = [
  {
    id: "smiley-rating",
    icon: <Smile strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Smiley rating",
    component: <SmileyRating />,
  },
  {
    id: "voice-feedback",
    icon: <Mic strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Voice feedback",
    component: <Mic strokeWidth={strokeWidth} width={iconWidth} />,
  },
  {
    id: "single-choice",
    icon: <CircleDot strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Single choice",
    component: <CircleDot strokeWidth={strokeWidth} width={iconWidth} />,
  },
  {
    id: "multiple-choice",
    icon: <SquareCheckBig strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Multiple choice",
    component: <SquareCheckBig strokeWidth={strokeWidth} width={iconWidth} />,
  },
  {
    id: "media-file",
    icon: <Image strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Media file",
    component: <Image strokeWidth={strokeWidth} width={iconWidth} />,
  },
  {
    id: "date-option",
    icon: <Calendar strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Date option",
    component: <Calendar strokeWidth={strokeWidth} width={iconWidth} />,
  },
  {
    id: "text-input",
    icon: <FileType strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Text input",
    component: <FileType strokeWidth={strokeWidth} width={iconWidth} />,
  },
  {
    id: "free-text",
    icon: <MessageSquarePlus strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Free text",
    component: (
      <MessageSquarePlus strokeWidth={strokeWidth} width={iconWidth} />
    ),
  },
  {
    id: "information",
    icon: <Info strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Information",
    component: <Info strokeWidth={strokeWidth} width={iconWidth} />,
  },
];
