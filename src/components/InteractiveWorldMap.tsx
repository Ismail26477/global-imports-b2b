"use client"
import { useEffect, useRef, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface Route {
  id: string
  from: { lat: number; lng: number; name: string; country: string }
  to: { lat: number; lng: number; name: string; country: string }
  duration: number
}

const routes: Route[] = [
  {
    id: "shanghai-mumbai",
    from: { lat: 30.7, lng: 121.5, name: "Shanghai", country: "China" },
    to: { lat: 19.04, lng: 72.89, name: "Mumbai", country: "India" },
    duration: 8,
  },
  {
    id: "shenzhen-mumbai",
    from: { lat: 22.6, lng: 114.0, name: "Shenzhen", country: "China" },
    to: { lat: 19.04, lng: 72.89, name: "Mumbai", country: "India" },
    duration: 7.5,
  },
  {
    id: "shanghai-chennai",
    from: { lat: 30.7, lng: 121.5, name: "Shanghai", country: "China" },
    to: { lat: 13.0, lng: 80.3, name: "Chennai", country: "India" },
    duration: 9,
  },
  {
    id: "singapore-mumbai",
    from: { lat: 1.3, lng: 103.8, name: "Singapore", country: "Singapore" },
    to: { lat: 19.04, lng: 72.89, name: "Mumbai", country: "India" },
    duration: 6,
  },
  {
    id: "hongkong-kolkata",
    from: { lat: 22.3, lng: 114.1, name: "Hong Kong", country: "Hong Kong" },
    to: { lat: 22.6, lng: 88.3, name: "Kolkata", country: "India" },
    duration: 8.5,
  },
]

interface ShipPosition {
  routeId: string
  progress: number
  lat: number
  lng: number
}

const InteractiveWorldMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)
  const [shipPositions, setShipPositions] = useState<ShipPosition[]>(
    routes.map((route) => ({
      routeId: route.id,
      progress: Math.random(),
      lat: route.from.lat,
      lng: route.from.lng,
    })),
  )
  const shipsRef = useRef<L.Marker[]>([])
  const linesRef = useRef<L.Polyline[]>([])

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    const mapElement = mapRef.current
    mapElement.style.width = "100%"
    mapElement.style.height = "100%"
    mapElement.style.minHeight = "400px"

    // Create map centered on Asia
    const map = L.map(mapRef.current).setView([20, 90], 4)

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map)

    mapInstance.current = map

    // Add routes as lines
    routes.forEach((route) => {
      const line = L.polyline(
        [
          [route.from.lat, route.from.lng],
          [route.to.lat, route.to.lng],
        ],
        {
          color: "hsl(199, 89%, 48%)",
          weight: 2,
          opacity: 0.6,
          dashArray: "5, 5",
        },
      ).addTo(map)
      linesRef.current.push(line)
    })

    // Add port markers
    const allPorts = new Set<string>()
    routes.forEach((route) => {
      allPorts.add(JSON.stringify({ lat: route.from.lat, lng: route.from.lng }))
      allPorts.add(JSON.stringify({ lat: route.to.lat, lng: route.to.lng }))
    })

    const portMap = new Map<string, { lat: number; lng: number; name: string; country: string }>()

    routes.forEach((route) => {
      portMap.set(JSON.stringify({ lat: route.from.lat, lng: route.from.lng }), route.from)
      portMap.set(JSON.stringify({ lat: route.to.lat, lng: route.to.lng }), route.to)
    })

    portMap.forEach((port) => {
      const marker = L.circleMarker([port.lat, port.lng], {
        radius: 6,
        fillColor: "hsl(199, 89%, 48%)",
        color: "hsl(222, 47%, 11%)",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
      })
        .addTo(map)
        .bindPopup(`<strong>${port.name}</strong><br/>${port.country}`)
      shipsRef.current.push(marker)
    })

    // Create ship markers
    routes.forEach((route) => {
      const shipIcon = L.divIcon({
        html: `
          <div style="
            width: 24px;
            height: 24px;
            background: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 30 20%22><path d=%22M0 12 L15 16 L30 12 L27 20 H3 L0 12Z%22 fill=%22%230099FF%22 stroke=%22%23001F3F%22 strokeWidth=%221%22/><rect x=%228%22 y=%226%22 width=%2214%22 height=%226%22 rx=%221%22 fill=%22%2333BBFF%22 stroke=%22%23001F3F%22 strokeWidth=%220.5%22/><rect x=%2214%22 y=%220%22 width=%222%22 height=%228%22 fill=%22%23001F3F%22/><path d=%22M16 0 L24 3 L16 6Z%22 fill=%22%235FD3FF%22/></svg>') center/contain no-repeat;
            transform: rotate(45deg);
          "></div>
        `,
        className: "ship-marker",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      })

      const marker = L.marker([route.from.lat, route.from.lng], { icon: shipIcon })
        .addTo(map)
        .bindPopup(`Ship traveling from ${route.from.name} to ${route.to.name}`)
      shipsRef.current.push(marker)
    })

    return () => {
      // Cleanup on unmount
    }
  }, [])

  // Animate ships along routes
  useEffect(() => {
    const interval = setInterval(() => {
      setShipPositions((prevPositions) =>
        prevPositions.map((ship) => {
          const route = routes.find((r) => r.id === ship.routeId)!
          let newProgress = ship.progress + 0.002
          if (newProgress > 1) newProgress = 0

          // Calculate position along route using linear interpolation
          const lat = route.from.lat + (route.to.lat - route.from.lat) * newProgress
          const lng = route.from.lng + (route.to.lng - route.from.lng) * newProgress

          return { ...ship, progress: newProgress, lat, lng }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Update ship markers on map
  useEffect(() => {
    if (!mapInstance.current) return

    shipPositions.forEach((ship, index) => {
      const shipMarkers = shipsRef.current.filter((_, i) => i >= routes.length) // Skip port markers
      if (shipMarkers[index]) {
        shipMarkers[index].setLatLng([ship.lat, ship.lng])
      }
    })
  }, [shipPositions])

  return (
    <div
      ref={mapRef}
      className="w-full h-96 rounded-lg overflow-hidden shadow-lg relative"
      style={{
        minHeight: "400px",
        height: "400px",
        width: "100%",
      }}
    />
  )
}

export default InteractiveWorldMap
