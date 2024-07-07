import { FC, useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { Hotel, Hotels } from '../../types/hotels';

const defaultCustomIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 39],
});

interface Props {
  hotelsList: Hotels;
  activeCity: string;
  selectedPoint: Hotel;
}

export const Map: FC<Props> = ({ hotelsList, activeCity, selectedPoint }) => {
  const MapRef = useRef(null);
  const cityData = hotelsList.find(
    (hotel) => hotel.city.name === activeCity
  )?.city;
  const points = hotelsList
    .filter((hotel) => hotel.city.name === activeCity)
    .map((hotel) => ({
      lat: hotel.location.latitude,
      lng: hotel.location.longitude,
      title: hotel.title,
    }));

  const map = useMap(cityData, MapRef);

  useEffect(() => {
    if (map && cityData) {
      map.setView(
        [cityData.location.latitude, cityData.location.longitude],
        10
      );
    }
  }, [map, cityData]);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.lat,
              lng: point.lng,
            },
            {
              icon:
                point.title === selectedPoint?.title
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }

    return () => {
      if (map) {
        map.eachLayer((layer) => {
          if (layer instanceof leaflet.Marker) {
            map.removeLayer(layer);
          }
        });
      }
    };
  }, [map, points, selectedPoint]);

  return <div style={{ height: '100%' }} ref={MapRef} />;
};
