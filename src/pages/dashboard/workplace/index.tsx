import React from 'react';
import { Grid } from '@arco-design/web-react';
import Overview from './overview';
import PopularContents from './popular-contents';
import ContentPercentage from './content-percentage';
import Shortcuts from './shortcuts';
import Announcement from './announcement';
import Carousel from './carousel';
import Docs from './docs';
import styles from './style/index.module.less';

import './mock';

const { Row, Col } = Grid;

const gutter = 16;

function Workplace() {
  return (
    <div className={styles.workplace}>
      <div className={styles.main}>
        <Overview />
        <Row gutter={gutter} className={styles.charts}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <PopularContents />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <ContentPercentage />
          </Col>
        </Row>
      </div>
      <div className={styles.right}>
        <Shortcuts />
        <Carousel />
        <Announcement />
        <Docs />
      </div>
    </div>
  );
}

export default Workplace;
