import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Question } from 'models/question';
import Entity from 'components/common/Entity';

import styles from './QuestionPaper.module.css';

interface IQuestionPaperProps {
  question: Question;
}

const QuestionPaper = ({ question }: IQuestionPaperProps) => {
  return (
    <Paper className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        {question.title}
      </Typography>
      <div className={styles.prompt}>{question.prompt}</div>
      <hr className={styles.hr} />
      <Typography variant="h6" className={styles.title}>
        Asked by:
        <Entity name={'Pseudo Near Expert'}>2 Answers . 1 Question</Entity>
      </Typography>
    </Paper>
  );
};

export default QuestionPaper;
