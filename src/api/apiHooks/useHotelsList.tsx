import { AxiosError, AxiosResponse } from 'axios';
import { instance } from '../api';
import { Hotels } from '../../types/hotels';
import { useEffect, useState } from 'react';

export const useHotelsList = () => {
  const [hotels, setHotels] = useState<Hotels>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{
    status: number | undefined;
    message: string;
  }>({ status: undefined, message: '' });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse<Hotels> = await instance.get<Hotels>(
          '/hotels'
        );
        setHotels(response.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError({ status: err.response?.status, message: err.message });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { hotels, isLoading, error };
};
