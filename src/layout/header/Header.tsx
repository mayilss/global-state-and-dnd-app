import { Button, Col, Flex, Tabs, Typography } from "antd";
import { PencilLine } from "lucide-react";
import { items } from "./constants";
import styles from "./header.styles";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const onTabChange = (key: string) => {
    navigate(key);
  };

  return (
    <Flex component="header" align="center" style={styles.wrapper}>
      <Col span={8}>
        <Flex gap={8}>
          <Typography.Text>Task Template</Typography.Text>
          <PencilLine color="blue" width={20} />
        </Flex>
      </Col>
      <Col span={8}>
        <Flex justify="center">
          <Tabs
            items={items}
            defaultActiveKey="1"
            tabBarStyle={styles.tabBar}
            onChange={onTabChange}
          />
        </Flex>
      </Col>
      <Col span={8}>
        <Flex gap={8} justify="flex-end">
          <Button>Dublicate</Button>
          <Button>Save Preview</Button>
          <Button type="primary">Save</Button>
        </Flex>
      </Col>
    </Flex>
  );
}
