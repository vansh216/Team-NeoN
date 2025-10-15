


import { useState } from "react";

const State = () => {
    const statesOfIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

const [selectedState, setSelectedState] = useState("");



  return (
    <div className="flex
     flex-col gap-0.5">
       <label className="text-purple-800 text-xl font-semibold" htmlFor="state-select">Select State:</label>
       <select className="border-1 rounded-sm border-purple-700 text-gray-100 bg-gray-950 outline-none"
         id="state-select"
        value={selectedState}
         onChange={(e) => setSelectedState(e.target.value)}
       >
         <option  value="">--Choose a state--</option>
         {statesOfIndia.map((state) => (
           <option key={state} value={state}>
             {state}
         </option>         ))}
       </select>
     </div>
   );
   
}

export default State


