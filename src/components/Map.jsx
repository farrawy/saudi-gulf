import React, { useEffect, useRef } from 'react'

const Map = () => {
  const mapRef = useRef(null)
  const apikey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  useEffect(() => {
    const initializeMap = () => {
      const latLng = { lat: 24.762, lng: 46.6038 }
      const map = new window.google.maps.Map(mapRef.current, {
        center: latLng,
        zoom: 14,
      })
      new window.google.maps.Marker({ position: latLng, map })
    }
    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apikey}&libraries=places`
      document.head.appendChild(script)
      script.addEventListener('load', initializeMap)
      return () => script.removeEventListener('load', initializeMap)
    } else {
      initializeMap()
    }
  }, [])

  return <div ref={mapRef} style={{}} className=' sm:h-full   mr-3' />
}

export default Map
