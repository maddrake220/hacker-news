import { useEffect, useState } from "react";
import { getComments, getUser } from "../utils/apis";

export const GetCommentsFetcher = (id) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getComments(id)
      .then((v) => {
        setComments(v);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    return () => setIsLoading(false);
  }, [id]);
  return [comments, isLoading];
};

export const GetUserFetcher = (id) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getUser(id)
      .then((v) => {
        setUser(v);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    return () => setIsLoading(false);
  }, [id]);
  return [user, isLoading];
};
