"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

interface ProfileType{
    id:number;
    firstName:string;
    lastName:string;
    age:number;
}

export default function  FetchHW() {
  const [name, setName] = useState("YEYE")
  const [profile, setProfile] = useState<ProfileType[]>([])


  useEffect(() => {
    async function fetchProfile() {
        try {
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json()
            setProfile(data.users)
        }
        catch (err) {
            console.log("Error:", err)
        }
    }
    fetchProfile()
}, [])

if (!profile) return <div>Loading...</div>
  return (
    <div>
        <p className='text-3xl font-bold'>User Profile</p>
        <ul>
        {profile.slice(0,10).map((prof: ProfileType) => (
            <li key={prof.id} className='border-2 border-gray-500 rounded-xl p-2 my-2 text-l'>
                {prof.id}. {prof.firstName} {prof.lastName}
                <div className='text-m'>
                    Age: {prof.age}
                </div>
            </li>
        ))}
        </ul>
    </div>
    
  )
}