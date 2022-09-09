import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

import styles from './index.less';

const { Header } = Layout;

export const BIHeader = () => {
  return (
    <Header className={styles['bi-header']}>
      <div className={styles['header-right']}>
        <div className={styles['user-wrap']}>
          <UserOutlined />
        </div>
      </div>
    </Header>
  );
};
