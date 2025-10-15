import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"


import Signup from "./pages/Signup"

import Signin from "./pages/Signin"
import HeaderCom from "./communityComps/HeaderCom"
import ButtonCom from "./communityComps/ButtonCom"
import Community from "./pages/Community"




import  Hindi from "./communityInsides/Hindi"
import Tamil from "./communityInsides/Tamil"
import Gujrati from "./communityInsides/Gujrati"
import Marathi from "./communityInsides/Marathi"
import South from "./communityInsides/South"
import CreateCommunity from "./pages/CreateCommunity"
import UserCard from "./components/UserCard"
import User from "./components/User"
import FindUser from "./pages/FindUser"
import SignupPopup from "./components/SignupPopup"

function App() {
return (
<BrowserRouter >
<Routes>

 {/* <Route path="/" element={<SignupPopup />} /> */}
 <Route path="/" element={<LandingPage />} />
 <Route path="/signin" element={<Signin />} />
  <Route path="/signup" element={<Signup />} />
 <Route path="/hindi-community" element={<Hindi />} />
 <Route path="/tamil-community" element={<Tamil />} />
 <Route path="/gujrati-community" element={<Gujrati />} />
 <Route path="/marathi-community" element={<Marathi />} />
 <Route path="/south-community" element={<South />} />
 <Route path="/create-community" element={<CreateCommunity />} />
 <Route path="/find-people" element={<FindUser />} /> 


</Routes>
</BrowserRouter>
)
}

export default App