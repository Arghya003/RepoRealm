import React, { useCallback, useEffect, useState } from 'react'
import Search from '../Components/Search'
import SortRepos from '../Components/SortRepos'
import ProfileInfo from '../Components/ProfileInfo'
import Repos from '../Components/Repos'
import toast from 'react-hot-toast'
import Spinner from "../Components/Spinner"
const HomePage = () => {
  const [userProfile,setUserProfile]=useState(null);
  const[repos,setRepos]=useState([])
  const[loading,setLoading]=useState(false)
  const[sortType,setSortType]=useState("recent")

  const getUserProfileRepos = useCallback(async () => {
    setLoading(true)
    try {
      const userRes = await fetch("https://api.github.com/users/Arghya003");
      const userProfile = await userRes.json();
      setUserProfile(userProfile)
      console.log(userProfile)
      const repoRes = await fetch(userProfile.repos_url)
      const repos = await repoRes.json();
      setRepos(repos)
      console.log(repos)

    }
    catch (e) {
      console.log(e);
      toast.error(e.message)
    }
    finally {
      setLoading(false)
    }
  },[])
  useEffect(()=>{
     getUserProfileRepos();
  },[getUserProfileRepos])
  return (
    <div className="m-4">
      <Search/>
      <SortRepos/>
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
      {userProfile && !loading&& <ProfileInfo userProfile={userProfile}/>}
   {repos.length>0 && !loading && <Repos repos={repos}/>}
      {loading&& <Spinner/>}
      </div>
      
    </div>
  )
}

export default HomePage
