import { Button, Flex, Tabs, Typography } from "antd";
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
    <Flex
      component="header"
      justify="space-between"
      align="center"
      style={styles.wrapper}
    >
      <Flex gap={8}>
        <Typography.Text>Task Template</Typography.Text>
        <PencilLine color="blue" width={20} />
      </Flex>
      <Tabs
        items={items}
        defaultActiveKey="1"
        tabBarStyle={styles.tabBar}
        onChange={onTabChange}
      />
      <Flex gap={8}>
        <Button>Dublicate</Button>
        <Button>Save Preview</Button>
        <Button type="primary">Save</Button>
      </Flex>
    </Flex>
  );
}
