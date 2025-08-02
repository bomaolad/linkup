import Image from 'next/image'
import React from 'react'
import { Ellipsis, ThumbsUp, Share2, MessageSquareMore } from 'lucide-react';
import Comments from './Comments';

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>

            {/* USER  */}
            <div className='flex items-center justify-between'>
                <div className="flex items-center gap-4">
                    <Image src='https://images.pexels.com/photos/33194560/pexels-photo-33194560.jpeg' alt='user icon' width={40} height={40} className='w-10 h-10 rounded-full' />
                    <span className='font-medium'>Abu Anas</span>
                </div>
                <Ellipsis width={16} height={16} />
            </div>

            {/* DESC  */}
            <div className='flex flex-col gap-4'>
                <div className="w-full min-h-96 relative">
                    <Image src='https://images.pexels.com/photos/17925535/pexels-photo-17925535.jpeg' alt='post img' fill className='object-cover rounded-md' />
                </div>
                <p className='px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            {/* INTERACTION  */}
            <div className='flex items-center justify-between text-sm my-4'>
                <div className='flex gap-8'>
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <ThumbsUp className='cursor-pointer' width={16} height={16} />
                        <span className='text-gray-300'> | </span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Likes</span></span>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Share2 className='cursor-pointer' width={16} height={16} />
                        <span className='text-gray-300'> | </span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Share</span></span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <MessageSquareMore className='cursor-pointer' width={16} height={16} />
                        <span className='text-gray-300'> | </span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Comments</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post
