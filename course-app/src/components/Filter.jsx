import React from 'react'

const Filter = ({filterData, category, setCategory}) => {

  function categoryHandler(title) {
    setCategory(title);
    console.log(title);
  }

  return (
    <div className='w-full flex-col flex lg:flex-row md:flex-row items-center justify-center space-none 
    md:space-x-2 lg:space-x-3 p-4 mx-auto'>
        {filterData.map(data => {
            return (
                <button key={data.id} className='w-[200px] md:w-fit lg:w-fit border px-4 py-2 rounded-xl font-semibold bg-blue-900 
                text-white cursor-pointer hover:bg-blue-300 hover:text-black my-1' onClick={() => categoryHandler(data.title)}>
                    {data.title}  
                </button>
            )
        })}
    </div>
  )
}

export default Filter