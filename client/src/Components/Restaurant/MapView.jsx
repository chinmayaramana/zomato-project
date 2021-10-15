import React from 'react'
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import { FaDirections } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
const MapView = (props) => {
    return (
        <>
            <div>
            <h4 className="text-2xl font-medium my-2">Call</h4>
            <h5 className="text-zomato_font my-2">{props.phno}</h5>
          </div>
          <div>
            <h4 className="text-2xl font-medium">Directions </h4>
            <div className="w-full h-48">
              <MapContainer
                center={props.mapLocation}
                zoom={13}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.mapLocation}>
                  <Popup>
                    {props.title} <br />
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <div>
              <p>
                {props.title}
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
                  Copy
                  <MdContentCopy />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
                  Directions
                  <span className="text-zomato_red">
                    <FaDirections />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
    )
}

export default MapView
