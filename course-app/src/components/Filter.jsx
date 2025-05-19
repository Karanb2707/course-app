import React from 'react'

const Filter = ({filterData}) => {
  return (
    <div className='w-full flex items-center justify-center space-x-3 p-4 mx-auto'>
        {filterData.map(data => {
            return (
                <button key={data.id} className='w-fit border px-4 py-2 rounded-xl font-semibold bg-blue-900 text-white cursor-pointer
                  hover:bg-blue-300 hover:text-black'>
                    {data.title}  
                </button>
            )
        })}
    </div>
  )
}

export default Filter