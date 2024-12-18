"use client";

import { useEffect } from 'react';
import './GoogleMaps.css';

const loadGoogleMapsScript = (callback) => {
    const existingScript = document.getElementById("googleMaps");
    if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.id = "googleMaps";
        script.async = true;
        script.defer = true; // Defer loading to improve performance
        document.body.appendChild(script);
        script.onload = () => {
            if (callback) callback();
        };
    } else if (existingScript && callback) {
        callback();
    }
};

const initMap = () => {
    new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.37703557804555, lng: -1.467710829265892 }, // Cantor Building coordinates
        zoom: 18,
    });
};

export default function GoogleMaps() {
    useEffect(() => {
        window.initMap = initMap;
        loadGoogleMapsScript(() => {
        });
    }, []);

    return <div id="map" className="map-container"></div>;
}
