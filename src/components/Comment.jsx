const Comment = ({ comment }) => {
  const { by } = comment;
  return <div>{by}</div>;
};

export default Comment;
