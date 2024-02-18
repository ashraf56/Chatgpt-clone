import React from 'react';

const Chats = ({ msg }) => {
    return (
        <div className='w-full mx-auto'>
            <div className={` card w-full  py-4 `}>
                <div className='flex'>
                    <p className='font-bold px-3  rounded-full'>{msg.role === 'user' ? 'me' : 'AI'}</p>
                    <p>{msg.content}</p>
                </div>
            </div>

        </div>
    );
};

export default Chats;