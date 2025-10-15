import React, { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    console.log(e.target.password.value)
    console.log(e.target.email.value)

    if (!form.email || !form.password) {
      setError("Please fill all the fields");
      return;
    }
    
    try {
      //! api call
      const res = await fetch("url", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(form)
      })


      if(!res.ok) throw new Error("Invalid Credentials")

        alert("successfully signed in")
    } catch (error) {
      setError(error.massage);
    }
    
  }
  return (
    <div className="w-full min-h-screen bg-[url('/formBG.png')]  bg-center bg-cover  flex justify-center items-center px-4 sm:px-6">
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 shadow-2xl border border-purple-500 bg-gray-950 grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden">
        <div className="flex flex-col px-6 sm:px-10 py-8 gap-4">
          <Heading
            heading={"Signin Page"}
            subHeading={
              "Signin to access all the services and benefits of our platform"
            }
          />
          <form onSubmit={handleSubmit} action="">
            {error && (
              <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
            )}
            <div className="flex flex-col gap-1 mt-3 w-full max-w-[350px]">
              <label className="text-purple-800 font-semibold text-base sm:text-lg md:text-xl">
                email
              </label>
              <input
                className="border border-purple-600 w-full p-2 rounded-md outline-none text-gray-200 bg-transparent focus:ring-2 focus:ring-purple-500"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="enter email"
                required
              />
            </div>
            <div className="flex flex-col gap-1 mt-3 w-full max-w-[350px]">
              <label
                className="text-purple-800 font-semibold text-base sm:text-lg md:text-xl"
                htmlFor="password"
              >
                password
              </label>
              <input
                id="password"
                className="border border-purple-600 w-full p-2 rounded-md outline-none text-gray-200 bg-transparent focus:ring-2 focus:ring-purple-500"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="123@rajk"
                required
              />
            </div>
            <div className=" mt-4 flex justify-center">
              <button
                className="border-1 cursor-pointer border-pink-600 hover:scale-105 hover:to-pink-600 hover:from-purple-600 transition-all duration-300 w-60 bg-gradient-to-r from-pink-600 to-purple-600 py-2 px-12 rounded-lg"
                type="submit"
              >
                Signin
              </button>
            </div>
          </form>
          <Footer
            main={"Don't have an account?"}
            to={"/signup"}
            name={"Signup"}
          />
        </div>

        <div className="hidden lg:block bg-[url('/signin.jpg')] bg-center bg-cover">
          <div className="w-full h-full bg-gray-900/50"></div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
