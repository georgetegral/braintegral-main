'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const GeolocationContext = createContext(null);

export const GeolocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [geoDetails, setGeoDetails] = useState(null);

  useEffect(() => {
    const fetchGeolocationDetails = async () => {
      try {
        const response = await fetch('/api/geo');
        if (!response.ok) {
          throw new Error('Failed to fetch geolocation details');
        }
        const details = await response.json();
        setGeoDetails(details);
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    };

    fetchGeolocationDetails();
  }, []);

  return (
    <GeolocationContext.Provider value={geoDetails}>
      {children}
    </GeolocationContext.Provider>
  );
};

export const useGeolocation = () => useContext(GeolocationContext);
