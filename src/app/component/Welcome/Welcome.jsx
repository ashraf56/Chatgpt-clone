import React from 'react';
import img from '@/asset/logo.jpg'
import Image from 'next/image';

const Welcome = () => {
    return (
        <div className='text-center justify-center items-center flex flex-col gap-5 mt-5'>
            <Image src={img} width={120} height={120} alt="i" className="rounded-full"></Image>
            <h4 className='font-bold text-xl'>How can I help you today?</h4>

        </div>
    );
};

export default Welcome;