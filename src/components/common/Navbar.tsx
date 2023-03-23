import React from 'react'
import styles from '@/styles/Navbar.module.css'
import clsx from 'clsx'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <header className={clsx(
            styles.navbar,
            "overflow-hidden flex flex-col w-11/12 my-8 relative"
        )}>
            <nav className={clsx("h-20 md:h-16 border-[3px]  rounded-full px-5 flex flex-col md:flex-row justify-center items-center py-5 md:justify-between text-white text-xl")}>
                <div className={clsx(
                    styles.navbar_brand
                )}>
                    <Link href="/">
                        SmartChain Poker
                    </Link>
                </div>
                <div className="flex items-center gap-x-3 py-2">
                    <a className="nav-item cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                        My NFT's
                    </a>
                    <div className={clsx(styles.nav_divider, "min-w-[1px] bg-red-700")}></div>
                    <a className="nav-item cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                        Marketplace
                    </a>
                    <div className={clsx(styles.nav_divider, "min-w-[1px] bg-red-700")}></div>

                    <a className="nav-item cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                        Gallery
                    </a>
                    <div className={clsx(styles.nav_divider, "min-w-[1px] bg-red-700")}></div>

                    <a className="nav-item cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                        Mint NFT
                    </a>
                </div>
            </nav>
            <nav className={styles.action_nav}>
                <div className='self-end uppercase flex gap-x-5 items-center text-base md:text-lg tracking-wider font-thin'>
                    <button className={clsx("uppercase")}>Play Poker</button>
                    <button className={clsx("uppercase")}>Register</button>
                    <button className={clsx("uppercase bg-[#998C61] hover:bg-[#a78c35] hover:scale-110 transition-all duration-200 ease-in-out  text-red-700 py-2 px-5 font-medium rounded-lg ")}>Connect Wallet</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar