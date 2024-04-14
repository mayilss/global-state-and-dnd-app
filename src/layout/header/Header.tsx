import { Button, Flex, Tabs, Typography } from "antd";
import { PencilLine } from "lucide-react";
import { items } from "./constants";
import styles from "./header.styles";

export default function Header() {
  const onTabChange = (key: string) => {
    console.log(key);
  };

  return (
    <Flex
      component="header"
      justify="space-between"
      align="center"
      style={styles.headerWrapper}
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
