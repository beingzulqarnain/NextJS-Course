"use client"
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const Blog = () => {
    const useparams = useParams()
    const userouter = useRouter()
  useEffect(() => {
    setTimeout(() => {
       userouter.push("/dashboard")
    }, 2000);
  }, [])
  
    
  return (
    <div>
        <div>
            <h1>this is {useparams.slug}</h1>
            {/* <button type='button' onClick={() => userouter.push("/dashboard")}>Dashboard</button> */}
        </div>
    </div>
  )
}

export default Blog