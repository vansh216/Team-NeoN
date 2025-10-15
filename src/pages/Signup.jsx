import React, {useState} from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import State from "../components/State";
import { Box } from "lucide-react";
import Interest from "../components/Interest";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Signup = () => {
const [form, setForm] = useState({name: "", email: "", password: "", interest: ""});

const [error, setError] = useState("");



function handleChange(e) {
   setForm({ ...form, [e.target.name]: e.target.value });

}


  async function handleSubmit(e){

    e.preventDefault();
    setError("");
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    console.log(e.target.interest.value)

    if(!form.name || !form.email || !form.password || !form.interest){
      setError("Alll fields are required....");
      return;
    }
 
    try {
      //! Api call
      const res = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type":
          "application/json"
        },
        body: JSON.stringify(form)
      })
      if(!res.ok) throw new Error("Invalid credentials")
        alert("Login successfully")
    } catch (error) {
      setError(error.message);
      
    }


  }


  return (
    <div className="w-full h-screen bg-[url('/formBG.png')] bg-cover bg-center flex justify-center items-center flex-col ">
      <div  className=" rounded-lg py-2 px-8 border-1 border-purple-600 hover:scale-105 transition-all duration-300 ring-1 hover:shadow-[0_0_8px_2px_#7e22ce] ring-purple-700 bg-gradient-to-t from-gray-950 via-black to-gray-900">

     
      <div className="flex justify-center items-center flex-col  p-5 rounded-lg">
        <Heading
          heading={"Registration page"}
          subHeading={"Register to explore the native lannguages and culture"}
        />
        </div>
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>

        {error && (
              <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
            )}

        <div className="flex flex-col gap-1 mt-3 w-[400px]">
          <label
            className="text-purple-800 font-semibold text-base sm:text-lg md:text-xl"
            htmlFor="name"
          >
            Enter your name
          </label>
          <input
            id="name"
            className="border border-purple-600 w-full p-2 rounded-md outline-none text-gray-200 bg-transparent focus:ring-2 focus:ring-purple-500"
            type="text"
            name="name"
            placeholder="alice suis"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-1 mt-3 w-[400px]">
          <label
            className="text-purple-800 font-semibold text-base sm:text-lg md:text-xl"
            htmlFor="email"
          >
            Enter your email
          </label>
          <input
            id="email`"
            name="email"
            className="border border-purple-600 w-full p-2 rounded-md outline-none text-gray-200 bg-transparent focus:ring-2 focus:ring-purple-500"
            type="email"
            placeholder="alice@gmail.com"
            value={form.email}
                onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1 mt-3  w-[400px]">
          <label
            className="text-purple-800 font-semibold text-base sm:text-lg md:text-xl"
            htmlFor="password"
          >
            Enter your password
          </label>
          <input
          name="password"
            
            className="border border-purple-600 w-full p-2 rounded-md outline-none text-gray-200 bg-transparent focus:ring-2 focus:ring-purple-500"
            type="password"
            placeholder="alice1234@123"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="mt-2">
          <State />
        </div> */}
        {/* <div className="mt-2">
          <div className=" flex gap-0.5  text-gray-100 flex-col">
            <label
              className="text-purple-800 font-semibold text-xl"
              htmlFor="interest"
            >
              Your interests
            </label>
            <textarea
              className="border-1 w-[500px] resize-none outline-none px-2 py-1 border-purple-600 rounded-md text-gray-300"
              name="interest"
              id="interest"
              value={form.interest}
              onChange={handleChange}
              placeholder="About your culture and native lannguages..."
            ></textarea>
          </div> */}
          <div className="flex justify-center mt-5">
            <button type="submit" className="w-[380px] cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-r from-pink-600 to-purple-600 border-2 border-purple-400 rounded-lg py-2 px-5">Sign Up</button>
          </div>
        
           </form>
        <div className="mt-2 flex justify-center">
          <Footer
            main={"Already have an account?"}
            to={"/signin"}
            name={"Signin"}
          />
        </div>
         </div>
      </div>
   
  );


};

export default Signup;
