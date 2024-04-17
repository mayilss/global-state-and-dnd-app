import DroppableArea from "@components/droppable-area/DroppableArea";
import DroppedQuestion from "@components/dropped-question/DroppedQuestion";
import { questionTypes, widgetAreaId } from "@constants";

const getDroppedComponent = (droppedItemId: string) => {
  const questionType = questionTypes.find((qt) => qt.id === droppedItemId);

  const onSubmit = () => console.log(questionType!.id);

  return (
    <DroppedQuestion label={questionType!.label} onSubmit={onSubmit}>
      {questionType!.component}
    </DroppedQuestion>
  );
};

export const getWidgetContent = (droppedItemId: string | null) => {
  if (droppedItemId) {
    return getDroppedComponent(droppedItemId);
  }
  return <DroppableArea id={widgetAreaId} />;
};
