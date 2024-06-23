import { FC, useEffect, useRef } from 'react';
import { hotels } from '../../mocks/offers';
import { citiesData } from '../../mocks/offers';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { Hotel } from '../../types/hotels';
import ActiveMarker from '../../assets/active-marker.svg';
import DefaultMarker from '../../assets/default-marker.svg';

const defaultCustomIcon = leaflet.icon({
  iconUrl: DefaultMarker,
  iconSize: [24, 24],
  iconAnchor: [20, 24],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: ActiveMarker,
  iconSize: [24, 24],
  iconAnchor: [20, 24],
});

interface Props {
  hotelsList: typeof hotels;
  activeCity: string;
  selectedPoint: Hotel;
}

export const Map: FC<Props> = ({ hotelsList, activeCity, selectedPoint }) => {
  const MapRef = useRef(null);
  const cityData = citiesData.find((city) => city.name === activeCity);
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

  return (
    <div className="cities__right-section">
      <section className="cities__map map" ref={MapRef}></section>
    </div>
  );
};
