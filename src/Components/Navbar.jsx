'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/about',
      title: 'About',
    },
    {
      path: '/services',
      title: 'Services',
    },

    {
      path: '/portfolio',
      title: 'Portfolio',
    },
    {
      path: '/contact',
      title: 'Contact',
    },
  ];

  const router = useRouter();
  const handleRoute = () => {
    router.push('/login');
  };
  return (
    <div>
      <div className="p-4 bg-red-500 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Next <span className="text-blue-500">Hero</span>
        </h1>
        <ul className="flex justify-between items-center gap-4">
          <li className="mr-4">
            {links?.map(link => (
              <Link
                className={`mr-4 ${
                  pathName === link.path && 'text-bold text-white'
                }`}
                key={link.path}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </li>
          <button
            onClick={handleRoute}
            className="btn px-4 py-3 rounded-md bg-blue-400"
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
