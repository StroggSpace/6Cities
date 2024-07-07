import { AxiosError, AxiosResponse } from 'axios';
import { instance } from '../api';
import { Hotel } from '../../types/hotels';
import { useEffect, useState } from 'react';

export const useHotel = (id: string | undefined) => {
  const [hotel, setHotel] = useState<Hotel>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{
    status: number | undefined;
    message: string;
  }>({ status: undefined, message: '' });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (id === undefined) {
          setError({ status: undefined, message: 'Invalid id' });
          return;
        }
        const response: AxiosResponse<Hotel> = await instance.get<Hotel>(
          `/hotels/${id}`
        );
        setHotel(response.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError({ status: err.response?.status, message: err.message });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { hotel, isLoading, error };
};
