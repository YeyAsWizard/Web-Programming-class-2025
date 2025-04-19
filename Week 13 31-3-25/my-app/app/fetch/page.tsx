"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

interface PostType{
    id:number;
    title:string;
    author:string;
    category:string;
}
interface ProfileType{
    id:number;
    login:string;
    avatar_url:string;
}

export default function FetchAPI() {
  const [name, setName] = useState("YEYE")
  const [post2, setPost2] = useState<PostType[]>([])
  const [profile, setProfile] = useState<ProfileType[]>([])


  useEffect(() => {
    async function fetchData() {
        try{
            let data = await fetch('https://api.vercel.app/blog')
            let warodomData = await fetch('https://api.github.com/users/wwarodom')
            let posts = await data.json()
            setPost2(posts)
            let warodom = await warodomData.json()
            setProfile(warodom)
        }
        catch (e){
            return<div>
                Error
            </div>
        }
    }
    fetchData();
  }, [])

  if(profile.length === 0) return console.log(profile);
  return (
    <div>
        FetchAPI
        <ul>
            <li className='border-2 border-gray-500 rounded-xl p-2 my-2'>
            Profile
            <Image src={profile.avatar_url} alt="profile" className='rounded-xl' width={100} height={100}/>
            <div>Login: {profile.login}</div>
            <div>ID: {profile.id}</div>
            </li>
        {post2.map((post: PostType) => (
            <li key={post.id} className='border-2 border-gray-500 rounded-xl p-2 my-2'>
                {post.id}. {post.title}
                <div>
                    By: {post.author}
                </div>
                <div>
                    Category: {post.category}
                </div>
            </li>
        ))}
        </ul>
    </div>
    
  )
}
