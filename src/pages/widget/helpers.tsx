import DroppableArea from "@components/droppable-area/DroppableArea";
import { questionTypes, widgetAreaId } from "@constants";

const getDroppedComponent = (droppedItemId: string) => {
  const questionType = questionTypes.find((qt) => qt.id === droppedItemId);

  return questionType!.component;
};

export const getWidgetContent = (droppedItemId: string | null) => {
  if (droppedItemId) {
    return getDroppedComponent(droppedItemId);
  }
  return <DroppableArea id={widgetAreaId} />;
};
