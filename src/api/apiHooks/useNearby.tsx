import { useEffect, useState } from 'react';
import { Hotels } from '../../types/hotels';
import { AxiosResponse } from 'axios';
import { instance } from '../api';

export const useNearby = (id: string | undefined) => {
  const [hotels, setHotels] = useState<Hotels>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response: AxiosResponse<Hotels> = await instance.get<Hotels>(
          `/hotels/${id}/nearby`
        );
        setHotels(response.data);
      }
    };

    fetchData();
  }, [id]);

  return hotels;
};
