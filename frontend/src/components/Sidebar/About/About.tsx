import React from 'react';
import { Paper, Typography } from '@mui/material';
import { ReactComponent as ExpertsIcon } from 'images/experts.svg';
import { ReactComponent as QuestionsIcon } from 'images/questions.svg';
import { ReactComponent as UpvoteIcon } from 'images/upvote.svg';
import { ReactComponent as AwardIcon } from 'images/award.svg';

import styles from './About.module.css';

const FACTS = [
  {
    icon: <ExpertsIcon />,
    text: '246 Experts',
  },
  {
    icon: <QuestionsIcon />,
    text: '100k Questions and Answers',
  },
  {
    icon: <UpvoteIcon />,
    text: '50k Upvotes',
  },
  {
    icon: <AwardIcon />,
    text: '145 Tokens Awarded',
  },
];

const About = () => {
  return (
    <Paper className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        About
      </Typography>

      {FACTS.map((fact) => (
        <div className={styles.info}>
          <div className={styles.icon}>{fact.icon}</div>
          <div className={styles.fact}>{fact.text}</div>
        </div>
      ))}
    </Paper>
  );
};

export default About;
