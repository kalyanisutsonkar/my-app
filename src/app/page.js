"use client"
import React, { useState } from 'react'

const page = () => {
 const[task,settask]=useState('')
 const[disk,setdisk]=useState('')
 const[maintask,setmaintask]=useState([])

 const submithandler = (e)=>{
   e.preventDefault()
   setmaintask([...maintask,{task},{disk}])
   setdisk("")
   settask("")
  console.log(maintask)
 }
 const deleteHandlar= (i)=>{
  let copy =[...maintask]
  copy.splice(i,1)
  setmaintask(copy)
 }
 let rendertask=<h2>No task availaible</h2>
 if(maintask.length>0){
  rendertask=maintask.map((t ,i) =>{
    return ( 
   <li key={i} className='flex items-center justify-between mb-8'>
     <div className='flex items-center justify-between w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.task}</h5>
      <h6 className='text-lg font-medium'>{t.disk}</h6>
      </div>
      <button onClick={()=>{
        deleteHandlar(i)
      }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
   </li>
   
    )
   })
 }
  return (
   <>
   <h1 className='header'>To Do List</h1>
   <form  onSubmit={submithandler}>
    <input onChange={(e)=>{
      settask(e.target.value)
    }} value={task} className='text-2xl border-4 border-zinc-800 m-5 px-2 py-4'placeholder='Write the task here'></input>
    <input onChange={(e)=>{
      setdisk(e.target.value)
    }} value={disk}  className='text-2xl border-4 border-zinc-800 m-5 px-2 py-4'placeholder='Write the description here'></input>
   <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded'>Add</button>
   </form>
   <hr/>
   <div className='p-8 bg-slate-200 flex'>
    <ul>
        {rendertask}
   
    </ul>
   </div>
   </>
  )
}

export default page
