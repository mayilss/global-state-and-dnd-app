import { Layout as AntLayout, Col, Flex } from "antd";
import Header from "./header/Header";
import LeftSideBar from "./left-sidebar/LeftSideBar";
import { Outlet } from "react-router-dom";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useGlobalState } from "@libs/global-state";
import globalStore from "@store";
import { widgetAreaId } from "@constants";
import RightSidebar from "./right-sidebar/RightSidebar";

export default function Layout() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_droppedItemId, setDroppedItemId] = useGlobalState(
    globalStore,
    "droppedItemId"
  );

  const onDragEnd = (e: DragEndEvent) => {
    if (e.over && e.over.id === widgetAreaId) {
      setDroppedItemId(e.active.id as string);
    }
  };

  return (
    <AntLayout>
      <Header />
      <Flex>
        <DndContext onDragEnd={onDragEnd}>
          <Col span={6}>
            <LeftSideBar />
          </Col>
          <Col span={12}>
            <Outlet />
          </Col>
        </DndContext>
        <Col span={6}>
          <RightSidebar />
        </Col>
      </Flex>
    </AntLayout>
  );
}
