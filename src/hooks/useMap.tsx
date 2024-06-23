import { MutableRefObject, useEffect, useState } from 'react';
import leaflet from 'leaflet';
import { City } from '../types/Cities';

export const useMap = (
  city: City | undefined,
  mapRef: MutableRefObject<HTMLDivElement | null>
) => {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = leaflet.map(mapRef.current, {
        center: {
          lat: city?.location.latitude || 0,
          lng: city?.location.longitude || 0,
        },
        zoom: city?.location.zoom || 0,
      });
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(newMap);

      setMap(newMap);
    }
  }, [mapRef, map, city]);

  return map;
};
