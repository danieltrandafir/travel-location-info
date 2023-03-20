import GoogleMapReact from "google-map-react";

import {Paper, Typography, useMediaQuery} from "@mui/material"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material"



export const Map = () => {

    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = {lat: 0, lng: 0};

    return (
        <div style={{backgroundColor:"red", height:"100vh", width:"100vw"}}>
            <GoogleMapReact 
                bootstrapURLKeys={{key:'AIzaSyBZedU85aS5ychcuCD7dmRTpN1h8Vb68kc'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >
            
            </GoogleMapReact>
          
        </div>
    );
}