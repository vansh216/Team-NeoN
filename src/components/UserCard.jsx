import { MapPin, Heart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="bg-black shadow-md rounded-2xl p-5 w-full sm:w-72 border-1 border-purple-800 hover:shadow-lg transition-shadow duration-200">

      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-purple-600"
        />
        <h2 className="text-lg font-semibold text-gray-100 mt-3">{user.name}</h2>
        <p className="text-sm text-gray-200">Age: {user.age}</p>
        <div className="flex items-center gap-1 text-sm text-gray-200 mt-1">
          <MapPin size={16} className="text-amber-600" />
          <span>{user.state}</span>
        </div>
      </div>

     
      <div className="border-t border-purple-800 my-4"></div>

   
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Heart className="text-amber-700" size={18} />
          <h3 className="text-sm font-semibold text-gray-100">Interests</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {user.interests.map((interest, idx) => (
            <span
              key={idx}
              className=" text-gray-100 border-1 text-xs px-2 py-1 rounded-full  border-purple-700 hover:text-purple-700 hover:border-gray-100"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="text-amber-700" size={18} />
          <h3 className="text-sm font-semibold text-gray-100">Wants to Learn</h3>
        </div>
        <p className="text-sm text-gray-300">{user.learningGoal}</p>
      </div>
      <div className=" mt-5 flex justify-center">
       <Link to={"/"} className="bg-gradient-to-r from-pink-600 to-purple-600 py-2 px-8 rounded-full">Connect</Link>
      </div>
    </div>
  );
}
