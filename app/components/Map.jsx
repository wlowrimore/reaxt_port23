"use client";

import { useState, useEffect } from "react";
import loader from "../../utils/googleMapsLoader";

const Map = ({ address }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 9,
          };
          const newMap = new window.google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          const cityCircle = new window.google.maps.Circle({
            strokeColor: "#e0f2fe",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#e0f2fe",
            fillOpacity: 0.5,

            map: newMap,
            center: results[0].geometry.location,
            radius: 20000,
          });
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: newMap,
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);

  return (
    <div
      id="map"
      className="w-[325px] h-[200px] md:my-4 md:w-[690px] md:h-[375px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[465px]"
    ></div>
  );
};

export default Map;
