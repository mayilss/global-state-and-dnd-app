import { DndContext } from "@dnd-kit/core";
import Layout from "@layout/Layout";
import Widget from "@pages/widget/Widget";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DndContext
        onDragEnd={(event) => {
          if (event.over && event.over.id === "droppable") {
            console.log(event.over);
          }
        }}
      >
        <Layout />
      </DndContext>
    ),
    children: [
      { index: true, element: <Widget /> },
      { path: "flow", element: <div>flow</div> },
      { path: "preview", element: <div>preview</div> },
    ],
  },
]);

export default router;
