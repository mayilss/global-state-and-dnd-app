import { Layout as AntLayout, Col } from "antd";
import Header from "./header/Header";
import LeftSideBar from "./left-sidebar/LeftSideBar";

export default function Layout() {
  return (
    <AntLayout>
      <Header />
      <Col span={5}>
        <LeftSideBar />
      </Col>
    </AntLayout>
  );
}
