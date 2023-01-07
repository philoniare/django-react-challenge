import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header';
import Home from './pages/Home';
import CreateQuestion from './pages/CreateQuestion';
import HeroBanner from './components/common/HeroBanner';
import Sidebar from './components/Sidebar';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <CssBaseline />
      <Header />
      <div className={styles.body}>
        <HeroBanner />
        <div className={styles.main}>
          <div className={styles.content}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/questions/new" element={<CreateQuestion />} />
            </Routes>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
