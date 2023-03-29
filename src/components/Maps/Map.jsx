import React from 'react'
import { YMaps, Map, Placemark, GeolocationControl, ZoomControl, FullscreenControl, TrafficControl, TypeSelector } from '@pbe/react-yandex-maps'
import './Maps.css'

const Maps = () => {
  return (
    <YMaps>
      <div className="maps">
        <Map defaultState={{ center: [44.6696368577317,34.4130585133099], zoom: 20  }} width="100%" height="100%">
          {/* <Placemark geometry={[44.6696368577317,34.4130585133099]} /> */}
          <FullscreenControl options={{ float: 'left' }} />
          <GeolocationControl options={{ float: "left" }} />
          <TrafficControl options={{ float: 'right' }} />
          {/* <TypeSelector options={{ float: 'right' }} /> */}
          <ZoomControl options={{ float: "left" }} />
        </ Map>
      </div>
  </YMaps>
  )
}

export default Maps