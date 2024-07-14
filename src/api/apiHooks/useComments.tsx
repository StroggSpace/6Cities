import { useEffect, useState } from 'react';
import { Comments } from '../../types/comments';
import { instance } from '../api';
import { AxiosError, AxiosResponse } from 'axios';

export const useComments = (id: string | undefined, update: boolean) => {
  const [comments, setComments] = useState<Comments>([]);
  const [error, setError] = useState<{
    status: number | undefined;
    message: string;
  }>({ status: undefined, message: '' });

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Comments> = await instance.get<Comments>(
          `/comments/${id}`
        );
        setComments(response.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError({ status: err.response?.status, message: err.message });
        }
      }
    };

    fetchData();
  }, [id, update]);

  return { comments, error };
};
