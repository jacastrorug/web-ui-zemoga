import React, { useState, useContext } from 'react';
import ReducerContext from '../context/ReducerContextProvider';
import { CardContainer } from '../components';
import { LIKE, DISLIKE } from '../types';

const Card = (props) => {
  const [voted, setVoted] = useState(false);
  const [option, setOption] = useState(null);
  const { dispatch } = useContext(ReducerContext);

  const likesPercent = ((props.likes / (props.likes + props.dislikes)) * 100).toFixed(0);
  const dislikesPercent = (100 - likesPercent).toFixed(0);

  const handleLikeSelection = () => {
    setOption('like');
  };

  const handleDisLikeSelection = () => {
    setOption('dislike');
  };

  const handleVoteAgain = () => {
    setVoted(false);
  };

  const handleSubmitVote = () => {
    if (!option) return;
    dispatch({
      type: option === 'like' ? LIKE : DISLIKE,
      payload: { id: props.id, index: props.section },
    });
    setVoted(true);
  };

  return (
    <CardContainer
      {...props}
      likesPercent={likesPercent}
      dislikesPercent={dislikesPercent}
      option={option}
      voted={voted}
      handleLike={handleLikeSelection}
      handleDisLike={handleDisLikeSelection}
      handleVoteAgain={handleVoteAgain}
      handleSubmit={handleSubmitVote}
    />
  );
};

export default Card;
