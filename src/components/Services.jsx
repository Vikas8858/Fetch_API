import React, { useEffect, useState } from 'react'

export default function Services() {

  const [first, setFirst]=useState("this is normal data");

  const [second, setSecond]=useState("this is very large data");

    useEffect(()=>{
        console.log("services is created");
        return ()=>{
            console.log("services is deleted");
        };
    },[second]);

  return (
    <div>

   <h1>{first}</h1>
   <button onClick={()=> setFirst("Normal Data has been changed")} className='mb-4 bg-red-400 rounded p-4'>Change Normal Data</button>
   

   <h1>{second}</h1>
   <button onClick={()=>setSecond("Large Data has been changed")} className='bg-blue-400 rounded p-4'>Change Large Data</button>
    </div>
  )
}
