import React from 'react'
import { GoogleMap, LoadScript , Marker } from '@react-google-maps/api';

const containerStyle = {
  marginTop:"320px",
  width: '1110px',
  height: '400px'
};

const position = {
  lat: 6.931970,
  lng: 79.857750
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }


function Map() {
  return (

    <LoadScript
      googleMapsApiKey="AIzaSyBAGsTlZT7fLRb_IVRmMFSXf-qbE1nnIKk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
      >
           <Marker
      onLoad={onLoad}
      position={position}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)