// // CitySearchModal.jsx
// import React, { useState } from 'react';

// const CitySearchModal = ({ isOpen, onClose, onSearch, onCitySelect }) => {
//   const [searchCity, setSearchCity] = useState('');

//   const handleSearch = () => {
//     onSearch(searchCity);
//     setSearchCity('');
//   };

//   return (
//     <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 w-80 max-w-full z-10">
//         <h2 className="text-xl font-bold text-white mb-4">Search for Places</h2>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full mb-4"
//           value={searchCity}
//           onChange={(e) => setSearchCity(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//         <div className="flex mt-4">
//           <button
//             className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mr-2"
//             onClick={() => onCitySelect('Barcelona')}
//           >
//             Barcelona
//           </button>
//           <button
//             className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mr-2"
//             onClick={() => onCitySelect('London')}
//           >
//             London
//           </button>
//           <button
//             className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
//             onClick={() => onCitySelect('Long Beach')}
//           >
//             Long Beach
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CitySearchModal;

