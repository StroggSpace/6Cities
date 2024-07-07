import { useEffect, useState } from 'react';
import { Comments } from '../../types/comments';
import { instance } from '../api';
import { AxiosError, AxiosResponse } from 'axios';

export const useComments = (id: string | undefined) => {
  const [comments, setComments] = useState<Comments>([]);
  const [error, setError] = useState<{
    status: number | undefined;
    message: string;
  }>({ status: undefined, message: '' });

  useEffect(() => {
    if (!id) {
      return;
    }

    try {
      const fetchData = async () => {
        const response: AxiosResponse<Comments> = await instance.get<Comments>(
          `/comments/${id}`
        );
        setComments(response.data);
      };
      fetchData();
    } catch (err) {
      if (err instanceof AxiosError) {
        setError({ status: err.response?.status, message: err.message });
      }
    }
  }, [id]);

  return { comments, error };
};
