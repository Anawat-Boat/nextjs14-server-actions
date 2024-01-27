import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Todos NextJs14 Server Actions</h1>
      <form className="flex flex-col w-100 my-16" >
        <input 
          type="text"
          name='message'
          className='px-4 py-2 mb-3' 
          placeholder='Wirte your job...'
        />
        <button className='bg-blue-500 px-4 py-2 rounded text-white'>
          Submit
        </button>
      </form>
    </div>
  )
}

//tsrfc