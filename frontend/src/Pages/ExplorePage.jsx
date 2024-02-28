const ExplorePage = () => {
  return (
    <div className='px-4'>
      <div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
        <h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
        <div className='flex flex-wrap gap-2 my-2 justify-center'>
          <img src='/javascript.svg' alt='JavaScript' className='h-11 sm:h-20 cursor-pointer rounded-lg hover:bg-slate-600' />
          <img src='/typescript.svg' alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer rounded-lg hover:bg-slate-600' />
          <img src='/c++.svg' alt='C++ logo' className='h-11 sm:h-20 cursor-pointer rounded-lg hover:bg-slate-600' />
          <img src='/python.svg' alt='Python logo' className='h-11 sm:h-20 cursor-pointer rounded-lg hover:bg-slate-600' />
          <img src='/java.svg' alt='Java logo' className='h-11 sm:h-20 cursor-pointer rounded-lg hover:bg-slate-600 ' />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage
