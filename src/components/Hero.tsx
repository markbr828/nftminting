import React from 'react'
import styles from '@/styles/Hero.module.css'
import clsx from 'clsx'
import Image from 'next/image'



type Props = {}

const Hero = (props: Props) => {
    return (
        <section className='flex flex-col w-full relative h-full flex-1 justify-between md:gap-y-5'>
            <div className=" w-11/12 flex h-1/3 flex-1">
                <div className="flex gap-y-2 flex-col w-full px-3 sm:px-10 md:px-20">
                    <div className='flex justify-start items-center uppercase text-white font-semibold md:text-2xl gap-x-5 w-2/5'>
                        <a href="">
                            <button className='uppercase tracking-widest hover:scale-105 hover:text-[#a78c35] transition-all duration-200 ease-in-out'>Discover</button>
                        </a>
                        <div className={clsx(styles.divider, "h-2/3 min-w-[2px] !bg-white")}></div>
                        <a href="">
                            <button className='uppercase tracking-widest hover:scale-105 hover:text-[#a78c35] transition-all duration-200 ease-in-out'>Collect</button>
                        </a>
                        <div className={clsx(styles.divider, "h-2/3 min-w-[2px] !bg-white")}></div>
                        <a href="">
                            <button className='uppercase tracking-widest hover:scale-105 hover:text-[#a78c35] transition-all duration-200 ease-in-out'>Sell</button>
                        </a>
                    </div>
                    <div className='w-full md:w-2/5 h-72 relative md:px-10'>
                        <Image className='absolute inset-0 object-contain h-full w-full' src="/images/nft-collection.png" alt='Nft Collection' fill />
                    </div>
                    <div className='text-white'>
                        <p className='md:text-lg tracking-widest'>You can Mint NFT&apos;s & Collect to Create Poker Card Combinations.</p>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col justify-between w-full self-end flex-grow gap-x-5">
                <div className='w-11/12 self-center my-2'>
                    <button className={clsx(
                        "uppercase flex items-center bg-[#998C61] hover:bg-[#a78c35] hover:scale-110 transition-all duration-300 ease-in-out text-red-700 py-3 md:py-4 px-6 md:px-10 font-bold text-2xl rounded-full ")} >
                        Mint NFT</button>
                </div>
                <div className="flex gap-x-2 items-center justify-self-end">
                    <div className={clsx(
                        // styles.prize,
                        'relative h-32 md:h-52 w-11/12 md:w-1/5'
                    )}>
                        <Image className={clsx(
                            'absolute inset-0 object-fill h-full w-full',
                        )} src="/images/prize.png" alt='Nft Collection' fill />
                    </div>
                    <div className='relative h-10 w-11/12 md:w-1/5 justify-start'>
                        <Image className='absolute object-contain inset-0 w-full h-full hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="/images/how-it-works.png" alt='How it works?' fill />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero