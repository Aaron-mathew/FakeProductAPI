import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='py-3 px-5 border rounded' href="/create">Add New Product</a>
        <hr className='w-[80%]'/>
        <h1>Category</h1>
        <ul>
          <li>Cat 1</li>
        </ul>
      </nav>
    </div>
  )
}

export default App;

// {04:58 Video}