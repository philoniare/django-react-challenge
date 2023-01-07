import React from 'react';
import { Paper, Typography } from '@mui/material';
import Entity from 'components/common/Entity';
import { ReactComponent as UpArrow } from 'images/up_arrow.svg';

import styles from './TopExperts.module.css';

const EXPERTS = ['Pseudo Near Expert', 'Near Expert', 'Bitcoin Maxi', 'Ethereum Maxi'];

const TopExperts = () => {
  return (
    <Paper className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Top Experts
      </Typography>

      {EXPERTS.map((expert) => (
        <Entity name={expert}>
          47 <UpArrow /> collected
        </Entity>
      ))}
    </Paper>
  );
};

export default TopExperts;
