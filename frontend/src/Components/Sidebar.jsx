import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi"
import { MdEditDocument } from "react-icons/md"
import Logout from './Logout';

const Sidebar = () => {
    const authUser=false;
  return (
    <aside className='flex flex-col items-center min-w-12 sm:min-w-16 sticky top-0 left-0 h-screen py-8 border-r  overflow-y-auto bg-glass'>
          <nav className='h-full flex flex-col gap-6'>
            <Link to="/" className='flex justify-center'>
                  <img src='../../public/logo.png' alt='RepoRealm Logo' className='w-10 h-10 hover:bg-gray-700 rounded-xl'/>
            </Link>
              <Link to='/' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-600' >
                        <IoHomeSharp size={25}/>
                    </Link>
                    {authUser&&(
                  <Link to="/likes" className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg
					hover:bg-gray-600'>
                        <FaHeart size={25}/>
                     
                        </Link>
                        
                    )}

              {authUser && (
                  <Link to="/explore" className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg
					hover:bg-gray-600'>
                      <MdExplore size={25} />

                  </Link>

              )}

                    
                    
                    {!authUser &&(
                  <Link to='/login' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg
					hover:bg-gray-600'>
                        <PiSignInBold size={25}/>
                    </Link>
                    )}
              {!authUser && (
                  <Link
                      to='/signup'
                      className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-600'
                  >
                      <MdEditDocument size={25} />
                  </Link>
              )}

              {authUser&&(
                <div className='flex flex-col mt-auto hover:bg-gray-600'>
                    <Logout size={22}/>
                </div>

              )}


          </nav>
    </aside>
  )
}

export default Sidebar
