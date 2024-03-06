import { useCallback, useEffect, useState } from 'react'
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

  const getUserProfileRepos = useCallback(async (username="Arghya003") => {
    setLoading(true)
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`,{
        headers:{
          authorization :`token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      });
      const userProfile = await userRes.json();
      setUserProfile(userProfile)
      console.log(userProfile)
      const repoRes = await fetch(userProfile.repos_url)
      const repos = await repoRes.json();
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      
      setRepos(repos)
      console.log(repos)
      return { userProfile, repos }

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

  const onSearch=async(e,username)=>{
    e.preventDefault();
    setLoading(true);
    setRepos([])
    setUserProfile(null)
   const {userProfile,repos}= await getUserProfileRepos(username)
   setUserProfile(userProfile);
   setRepos(repos)
   setLoading(false)
  }
  const onSort=(sortType)=>{
    if(sortType==="recent"){
      repos.sort((a,b)=> new Date(b.created_at)- new Date(a.created_at)) //desc order
    }
    else if(sortType==='stars'){
      repos.sort((a, b) => b.stargazers_count- a.stargazers_count) //
    }
    else if(sortType==='fork'){
      repos.sort((a, b) => b.forks_count - a.forks_count) 
    }
    setSortType(sortType)
    setRepos([...repos])
  }

  return (
    <div className="m-4">
      <Search onSearch={onSearch}/>
      {repos.length>=0 &&<SortRepos onSort={onSort} sortType={sortType}/>}
       <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
      {userProfile && !loading&& <ProfileInfo userProfile={userProfile}/>}
   {repos.length>=0 && !loading && <Repos repos={repos}/>}
      {loading&& <Spinner/>}
      </div>
      
    </div>
  )
}

export default HomePage
