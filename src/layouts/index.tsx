import { useKeepOutlets } from '@umijs/max';
import { Layout } from 'antd';

import { BIHeader } from './components/BIHeader';
import { BIMenu } from './components/BIMenu';

const { Content } = Layout;

export default function BasicLayout() {
  const tabsElements = useKeepOutlets();

  return (
    <Layout style={{ height: '100%' }}>
      <BIHeader />
      <Layout style={{ height: '100%' }}>
        <BIMenu />
        <Content>{tabsElements}</Content>
      </Layout>
    </Layout>
  );
}
