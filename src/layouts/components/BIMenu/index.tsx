import { CodeOutlined, DesktopOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from '@umijs/max';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('首页', '/home', <HomeOutlined />),
  getItem('权限', '/access', <DesktopOutlined />),
  getItem('CRUD', '/table', <CodeOutlined />),
];

export const BIMenu = () => {
  const navigate = useNavigate();

  return (
    <Sider theme="light" width={256} collapsible>
      <Menu
        onClick={(e) => {
          navigate(e?.key);
        }}
        mode="inline"
        defaultOpenKeys={['/settings']}
        items={items}
      />
    </Sider>
  );
};
