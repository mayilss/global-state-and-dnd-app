import Layout from "@layout/Layout";
import { DndContext } from "@dnd-kit/core";

function App() {
  return (
    <DndContext>
      <Layout />
    </DndContext>
  );
}

export default App;
