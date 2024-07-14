import { FC, useState } from 'react';
import { Hotel } from '../../types/hotels';
import { Map } from '../map/Map';
import { NearPlacesList } from '../nearPlacesList/NearPlacesList';
import { useNearby } from '../../api/apiHooks/useNearby';

interface Props {
  id: string;
  hotel: Hotel;
}
export const NearbyHotelsComponent: FC<Props> = ({ id, hotel }) => {
  const nearbyHotels = useNearby(id);
  const [selectedPoint, setSelectedPoint] = useState<Hotel | undefined>();
  return (
    <>
      <section className="property__map map">
        <Map
          hotelsList={nearbyHotels}
          activeCity={hotel?.city.name || ''}
          selectedPoint={selectedPoint as Hotel}
        />
      </section>

      <NearPlacesList
        places={nearbyHotels}
        setSelectedPoint={setSelectedPoint}
      />
    </>
  );
};
