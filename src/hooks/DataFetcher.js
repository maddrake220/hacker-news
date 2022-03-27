import { useEffect, useState } from "react";
import { getComments, getStory, getStoryTypeIds, getUser } from "../utils/apis";

export const GetStoryFetcher = (id) => {
  const [story, setStory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getStory(id)
      .then((v) => {
        setStory(v);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(e);
        setIsLoading(false);
      });
    return () => setIsLoading(false);
  }, [id]);
  return [story, isLoading, isError];
};

export const GetStoriesFetcher = (type, start, end) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getStoryTypeIds(type, start, end)
      .then((v) => {
        setStories(v);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(e);
        setIsLoading(false);
      });
    return () => setIsLoading(false);
  }, [type, start, end]);
  return [stories, isLoading, isError];
};

export const GetCommentsFetcher = (id) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getComments(id)
      .then((v) => {
        setComments(v);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
    return () => setIsLoading(false);
  }, [id]);
  return [comments, isLoading, error];
};

export const GetUserFetcher = (id) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getUser(id)
      .then((v) => {
        setUser(v);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
    return () => setIsLoading(false);
  }, [id]);
  return [user, isLoading, error];
};
