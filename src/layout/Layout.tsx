import { Layout as AntLayout, Col, Flex } from "antd";
import Header from "./header/Header";
import LeftSideBar from "./left-sidebar/LeftSideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <AntLayout>
      <Header />
      <Flex>
        <Col span={6}>
          <LeftSideBar />
        </Col>
        <Col span={12}>
          <Outlet />
        </Col>
        <Col span={6}>
          <div>right</div>
        </Col>
      </Flex>
    </AntLayout>
  );
}
