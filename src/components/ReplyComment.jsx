import { useEffect, useState } from "react";
import { getComments } from "../utils/apis";
import Comment from "./Comment";

const ReplyComment = ({ responseTo, dth }) => {
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getComments(responseTo)
      .then((v) => {
        setComment(v);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    return () => setIsLoading(false);
  }, [responseTo]);
  return (
    <div>
      {comment &&
        comment.map((v) => (
          <>
            <Comment isLoading={isLoading} comment={v.data} dth={dth + 1} />
            <ReplyComment responseTo={v.data.id} dth={dth + 1} />
          </>
        ))}
    </div>
  );
};

export default ReplyComment;
