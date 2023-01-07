import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from 'actions';
import { Question } from 'models/question';
import QuestionPaper from './QuestionPaper';

interface IHomeProps {
  questions: Question[];
  fetchQuestionList: () => void;
}

const Home = ({ questions = [], fetchQuestionList }: IHomeProps) => {
  useEffect(() => {
    fetchQuestionList();
  }, []);

  return (
    <div>
      {questions.map((question) => (
        <QuestionPaper question={question} key={question.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions.list,
    isFetching: state.questions.isFetching,
  };
};

export default connect(mapStateToProps, { fetchQuestionList: fetchQuestions })(Home);
