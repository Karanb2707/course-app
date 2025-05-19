import React from 'react'

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-40">
      <div className="w-10 h-10 border-4 border-slate-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-black font-semibold">Loading</p>
    </div>
  )
}

export default Spinner
