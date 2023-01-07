import React from 'react';
import { Paper, Typography } from '@mui/material';
import { ReactComponent as NearLogo } from 'images/near_logo.svg';
import { useNavigate } from 'react-router-dom';

import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Paper className={styles.container} onClick={handleLogoClick}>
      <NearLogo className={styles.logo} />
      <Typography variant="h1" className={styles.title}>
        Near Protocol
      </Typography>
    </Paper>
  );
};

export default HeroBanner;
