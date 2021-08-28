import React from 'react';

import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export const MapContainer = (props) => {
    const { google } = props;
};

export default GoogleApiWrapper ({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  language: 'pt-BT',
})(MapContainer);