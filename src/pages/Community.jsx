


import React from 'react'
import ButtonCom from '../communityComps/ButtonCom'
import HeaderCom from '../communityComps/HeaderCom'
import CardCom from '../communityComps/CardCom'

const Community = () => {
  return (
    <div className="w-full min-h-screen px-4">
      
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl mt-4 text-center font-semibold bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text">
          Explore Communities
        </h1>
      </div>

  
      <div className="mt-8 flex justify-center">
        <ButtonCom />
      </div>

     
      <div className="mt-4">
        <HeaderCom />
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full max-w-7xl mx-auto">
        <CardCom
        to={"/tamil-community"}
          mainHeading={"Tamil Cultural Club"}
          image={"Tamil.webp"}
          subHeading={
            "Join this club to elevate your interest in tamil language and south culture"
          }
          first={"culture"}
          second={"events"}
          third={"quizes"}
          number={42}
        />
        <CardCom
        to={"/hindi-community"}
          mainHeading={"Hindi Cultural mela"}
          image={"hindi.webp"}
          subHeading={
            "Join this to about hindi and it's history.Get weekly mocks and quizzes and all"
          }
          first={"culture"}
          second={"mocks"}
          third={"histort"}
          number={310}
        />
        <CardCom
        to={"/gujarati-community"}
          mainHeading={"Gujrati Lang Hub"}
          image={"Gujrat.webp"}
          subHeading={
            "Add Gujarati culture to your mind and learn languages efficiently by group discussing"
          }
          first={"History"}
          second={"events"}
          third={"Discussion"}
          number={54}
        />
        <CardCom
        to={"/marathi-community"}
          mainHeading={"Marathi Group"}
          image={"Marathi.webp"}
          subHeading={
            "Join this club to elevate your interest in tamil language and south culture"
          }
          first={"culture"}
          second={"events"}
          third={"quizes"}
          number={172}
        />
        <CardCom
        to={"/south-community"}
          mainHeading={"South Cultural Commmunity"}
          image={"southIndian.webp"}
          subHeading={"Know about the  south culture and join to meet us"}
          first={"Events"}
          second={"History"}
          third={"Games"}
          number={172}
        />
      </div>
    </div>
  )
}

export default Community
