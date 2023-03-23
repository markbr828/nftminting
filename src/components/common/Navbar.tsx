import React from 'react'
import styles from '@/styles/Navbar.module.css'
import clsx from 'clsx'
import Link from 'next/link'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: "My NFT&'s", href: '#', current: true },
    { name: 'Marketplace', href: '#', current: false },
    { name: 'Gallery', href: '#', current: false },
    { name: 'Mint NFT', href: '#', current: false },
]

// function clsx(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

type Props = {}

const Navbar = (props: Props) => {
    return (
        <>
            <header className={clsx(
                styles.navbar,
                " md:flex flex-col w-11/12 my-8 gap-y-5  relative"
            )}>
                <nav className={clsx("h-20 md:h-16 border-[3px] w-full rounded-full px-5 flex flex-col md:flex-row justify-center items-center py-5 md:justify-between text-white text-xl")}>
                    <div className='flex justify-between items-center w-full md:w-auto'>
                        <div className={clsx(
                            styles.navbar_brand,
                            "text-xl md:text-2xl",
                        )}>
                            <Link href="/">
                                SmartChain Poker
                            </Link>
                        </div>
                        <Menu as="div" className="relative ml-3 md:hidden">
                            {({ open }) => (
                                <>
                                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="sr-only">Open user menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute w-48 bg-gray-700 right-0 z-10 mt-2 origin-top-right rounded-md text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {
                                                navigation.map((navItem, index) => {
                                                    return (
                                                        <Menu.Item key={navItem.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={navItem.href}
                                                                    className={clsx(active ? 'bg-gray-800' : '', 'block px-4 py-2 text-sm text-white')}
                                                                >
                                                                    {navItem.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    )
                                                })
                                            }
                                        </Menu.Items>
                                    </Transition>
                                </>

                            )}
                        </Menu>
                    </div>
                    <div className="items-center gap-x-3 py-2 hidden md:flex flex-1 justify-end ">
                        <a className="nav-item cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                            My NFT&apos;s
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
                <nav className={clsx(
                    "flex items-center text-white w-full justify-end my-5 md:my-auto"
                )}>
                    <div className=' self-end uppercase flex gap-x-5 items-center text-base md:text-lg tracking-wider font-thin'>
                        <button className={clsx("uppercase hover:text-[#a78c35] ")}>Play Poker</button>
                        <button className={clsx("uppercase hover:text-[#a78c35] ")}>Register</button>
                        <button className={clsx("uppercase bg-[#998C61] hover:bg-[#a78c35] hover:scale-110 transition-all duration-200 ease-in-out  text-red-700 py-2 px-5 font-medium rounded-lg ")}>Connect Wallet</button>
                    </div>
                </nav>

            </header>
            <header className='w-full hidden'>
                <Disclosure as="nav" className="w-full">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">

                                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                        <div className="flex flex-shrink-0 items-center">
                                            <div className={clsx(
                                                styles.navbar_brand,
                                                "text-xl md:text-2xl",
                                            )}>
                                                <Link href="/">
                                                    SmartChain Poker
                                                </Link>
                                            </div>

                                        </div>
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={clsx(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                        {/* Mobile menu button*/}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        {/* <button
                                            type="button"
                                            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button> */}

                                        {/* Profile dropdown */}
                                        {/* <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Your Profile
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign out
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu> */}
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={clsx(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </header>
        </>

    )
}

export default Navbar