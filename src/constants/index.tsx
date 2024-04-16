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
    component: (
      <div>
        <Mic strokeWidth={strokeWidth} width={iconWidth} />
      </div>
    ),
  },
  {
    id: "single-choice",
    icon: <CircleDot strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Single choice",
    component: (
      <div>
        <CircleDot strokeWidth={strokeWidth} width={iconWidth} />
      </div>
    ),
  },
  {
    id: "multiple-choice",
    icon: <SquareCheckBig strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Multiple choice",
    component: (
      <div>
        <SquareCheckBig strokeWidth={strokeWidth} width={iconWidth} />
      </div>
    ),
  },
  {
    id: "media-file",
    icon: <Image strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Media file",
    component: (
      <div>
        <Image strokeWidth={strokeWidth} width={iconWidth} />
      </div>
    ),
  },
  {
    id: "date-option",
    icon: <Calendar strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Date option",
    component: (
      <div>
        <Calendar strokeWidth={strokeWidth} width={iconWidth} />
      </div>
    ),
  },
  {
    id: "text-input",
    icon: <FileType strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Text input",
    component: (
      <div>
        <FileType strokeWidth={strokeWidth} width={iconWidth} />
      </div>
    ),
  },
  {
    id: "free-text",
    icon: <MessageSquarePlus strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Free text",
    component: (
      <div>
        <MessageSquarePlus strokeWidth={strokeWidth} width={iconWidth} />
      </div>
    ),
  },
  {
    id: "information",
    icon: <Info strokeWidth={strokeWidth} width={iconWidth} />,
    label: "Information",
    component: (
      <div>
        <Info strokeWidth={strokeWidth} width={iconWidth} />
      </div>
    ),
  },
];
