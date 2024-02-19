import React from 'react';
import imf from '@/asset/chatgpt.png'
import Image from 'next/image';
const Chats = ({ msg }) => {
    return (
        <div className='w-full items-center justify-center  '>
            <div className={` card w-full py-4 px-16 md:px-24  lg:px-52 `}>
                <div className='flex '>
                    <div className='font-bold px-3  rounded-full'>{msg.role === 'user' ?
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span className="text-neutral-content">A</span>
                            </div>
                        </div>
                        :
                        <Image src={imf} width={50} height={50} alt='i' className='rounded-full w-8'  />}</div>
                    <p>{msg.content}</p>
                </div>
            </div>

        </div>
    );
};

export default Chats;