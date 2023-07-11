
import { useMemo, React } from "react";
import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/Hours&Locations.module.css'
import {locations} from '/constants.js'

export default function HoursLocations() {

    

    var center = useMemo(() => (locations[0].coordinates), []);


    const markers = locations.map(location => 
        <MarkerF position={location.coordinates}/> 
    )

    const containerStyle = {
        position: 'relative',
        width: 'inherit',
        height: 'inherit'
      };

    return (
    <div>
        <div className={styles.imagecontainer}>
            <div className={styles.outerrectangle}> 
                <div className={styles.innerrectangle}> 
                    <h1> Hours & Locations </h1>
                </div>
            </div>
            <div className={styles.image}>
                <Image
                src={require("/public/cafehero1alt.jpg")}
                fill={true}
                style={{objectFit: "cover"}}
                alt="Cafe Display"
                />
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.sidebar}> 
                {locations.map((location) => 
                    <div className={styles.card}>
                        <h1>{location.name}</h1>
                        <p>{location.address}</p>
                        <h1>  Hours </h1>
                        <p> 
                            Monday-Thursday: <span>9AM - 5PM</span> <br/>
                            Friday: <span>9AM - 4PM</span> <br/>
                            Saturday: <span>11AM - 8PM</span> <br/>
                            Sunday: <span>11AM - 6PM</span> <br/>
                        </p>
                </div>
                )}
            </div>
            { window.google === undefined ? 
            <LoadScript googleMapsApiKey= {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                <div className={styles.mapcontainer}>
                    <GoogleMap zoom={13} center={center} mapContainerStyle={containerStyle}>
                        {markers}
                    </GoogleMap>
                </div>
            </LoadScript>
            :         
            <div className={styles.mapcontainer}>
                <GoogleMap zoom={13} center={center} mapContainerStyle={containerStyle}>
                    {markers}
                </GoogleMap>
            </div>
            }       
        </div>
    </div>
    );
}
  






