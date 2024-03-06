import Repo from "./Repo";

const Repos = ({repos,alwaysFullWidth=false}) => {
    const className=alwaysFullWidth?"w-full":"lg: w-2/3 w-full"
    return (
        <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
           {repos.map(repo=>(
            <Repo key={repo.id} repo={repo}/>
           ))}
           {repos.length===0 && <p className=" flex items-center justify-center h-32">No Repositories Found</p>}
        </div>
    );
};

export default Repos
