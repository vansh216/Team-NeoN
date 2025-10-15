
import { Link } from 'react-router-dom'

const ButtonCom = () => {




  return (
    <div className='flex justify-between w-[80%]'>
<div >
    <h1 className='text-3xl text-gray-100 font-semibold'>Communities</h1>
</div>
    <div>
      <Link to={"/create-community"}>
   <button  className='bg-gradient-to-r from-pink-700 to-purple-600 p-2 rounded-lg text-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer'>Create your community</button>
      </Link>
    </div>
    </div>
  )
}

export default ButtonCom;