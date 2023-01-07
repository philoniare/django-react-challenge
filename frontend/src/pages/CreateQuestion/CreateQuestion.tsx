import React, { useState } from 'react';
import { Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as EscIcon } from 'images/esc.svg';
import HelixButton from 'components/common/HelixButton';
import questionApi from 'apis/questionApi';

import styles from './CreateQuestion.module.css';

const CHARACTER_LIMIT = 100;

const CreateQuestion = () => {
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handlePromptChange = (e: any) => {
    setPrompt(e.target.value);
  };

  const handleEsc = () => {
    navigate('/');
  };

  const handlePost = async () => {
    await questionApi.create({ title, prompt });
    navigate('/');
  };

  return (
    <Paper className={styles.container}>
      <div className={styles.titleContainer}>
        <Typography variant="h4" className={styles.title}>
          New Question
        </Typography>
        <EscIcon onClick={handleEsc} className={styles.esc} />
      </div>

      <hr />
      <TextField
        size="small"
        label="Enter the question title"
        variant="outlined"
        value={title}
        onChange={handleTitleChange}
        inputProps={{ maxLength: CHARACTER_LIMIT }}
        helperText={`${title.length}/${CHARACTER_LIMIT}`}
        required={true}
      />
      <textarea
        value={prompt}
        onChange={handlePromptChange}
        rows={15}
        placeholder="Write your question here"
        className={styles.textarea}
      />
      <div className={styles.actionContainer}>
        <div className={styles.buttonContainer}>
          <HelixButton isActive={!!title.length && !!prompt.length} onClick={handlePost}>
            Post
          </HelixButton>
        </div>
      </div>
    </Paper>
  );
};

export default CreateQuestion;
