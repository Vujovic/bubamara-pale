import React from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"

export const MyMap = ({ options }) => {
  const position = [43.8132246, 18.5690731]
  if (typeof window !== "undefined") {
    return (
      <Map
        style={{
          zIndex: 1,
          minHeight: "400px",
          width: "100%",
        }}
        center={position}
        zoom={15}
      >
        <TileLayer url="https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=918371b8945847089974ee90a88b4e88" />
        <Marker position={position}>
          <Popup>ДЦ Буба-Мара Пале</Popup>
        </Marker>
      </Map>
    )
  }
  return null
}
