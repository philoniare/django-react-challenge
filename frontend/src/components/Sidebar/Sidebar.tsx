import React from 'react';
import About from './About';
import TopExperts from './TopExperts';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <About />
      <TopExperts />
    </div>
  );
};

export default Sidebar;
