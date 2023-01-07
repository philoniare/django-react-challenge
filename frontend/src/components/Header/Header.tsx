import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.css';
import HelixButton from '../common/HelixButton';

const Header = () => {
  const navigate = useNavigate();

  const handleAskQuestion = () => {
    navigate('/questions/new');
  };

  return (
    <AppBar position="static" className={styles.appBar} color={'secondary'}>
      <Toolbar className={styles.toolbar}>
        <HelixButton onClick={handleAskQuestion}>Ask a question</HelixButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
