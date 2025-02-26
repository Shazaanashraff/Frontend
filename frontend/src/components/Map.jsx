// import React, { useState, useEffect, useContext } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { assets } from "../assets/assets";


// const [courts, setCourts] = useState([])



// // Custom icons for available & unavailable futsals
// const availableIcon = new L.Icon({
//   iconUrl: assets.active_pin,
//   iconSize: [40, 40],
// });
// const unavailableIcon = new L.Icon({
//   iconUrl: assets.not_active_pin,
//   iconSize: [40, 40],
// });

// const getCourtsData = async () => {
//   try {
      
//       const {data} = await axios.get(backendUrl + '/api/manager/list')
//       if (data.success) {
//          setCourts(data.courts)
//       }else{
//           toast.error(data.message)
//       }

//   } catch (error) {
//       console.log(error)

//   }
// }


// // Haversine formula to calculate distance between two coordinates
// const getDistance = (lat1, lon1, lat2, lon2) => {
//   const toRad = (deg) => (deg * Math.PI) / 180;
//   const R = 6371; // Radius of Earth in km
//   const dLat = toRad(lat2 - lat1);
//   const dLon = toRad(lon2 - lon1);
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(toRad(lat1)) *
//       Math.cos(toRad(lat2)) *
//       Math.sin(dLon / 2) *
//       Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c; // Distance in km
// };

// const Map = ({ futsals = [] }) => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [sortedFutsals, setSortedFutsals] = useState([]);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       const watchId = navigator.geolocation.watchPosition(
//         (position) => {
//           const userLoc = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setUserLocation(userLoc);

          
//         },
//         (error) => {
//           console.error("Geolocation permission denied.", error);
//         }
//       );

//       // Cleanup function to clear the watchPosition when the component unmounts
//       return () => navigator.geolocation.clearWatch(watchId);
//     }
//   }, []);

//   return (
//     <div className="relative w-full h-[500px]">
//       {/* Map */}
//       <MapContainer
//         center={userLocation || [6.9271, 79.8612]} // Default to Colombo
//         zoom={12}
//         style={{ height: "100%", width: "100%", borderRadius: "12px" }}
//         attributionControl={false}
//       >
//         {/* OpenStreetMap Tiles */}
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//         {/* User's Location Marker */}
//         {userLocation && (
//           <Marker position={[userLocation.lat, userLocation.lng]}>
//             <Popup className="text-center">
//               <p className="font-semibold text-lg">You are here</p>
//             </Popup>
//           </Marker>
//         )}

//         {/* Sorted Futsal Locations */}
//         {sortedFutsals.map((courts) => (
//           <Marker
//             key={courts._id}
//             position={[courts.latitude, courts.longitude]}
//             icon={courts.isAvailable ? availableIcon : unavailableIcon}
//           >
//             <Popup>
//               <div className="text-center">
//                 <h3 className="text-lg font-bold">{courts.name}</h3>
//                 <p className="text-sm">{courts.address}</p>
//                 <p className={`text-sm font-semibold ${courts.isAvailable ? "text-green-600" : "text-red-600"}`}>
//                   {courts.isAvailable ? "Open ✅" : "Closed ❌"}
//                 </p>
//                 <a
//                   href={`https://www.google.com/maps/search/?api=1&query=${courts.latitude},${courts.longitude}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline block mt-2"
//                 >
//                   View on Google Maps
//                 </a>
//               </div>
//             </Popup>
//             <Tooltip>{courts.name}</Tooltip>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;
