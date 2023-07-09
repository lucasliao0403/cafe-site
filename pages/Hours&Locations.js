
import { useMemo, React } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function HoursLocations() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
  
    if (!isLoaded) return <div>Loading...</div>;
    return (
    <div>
        wasd<br/>
        <Map />
    </div>
    );
}
  

function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  
    return (
        <>
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
      </>
    );
}


