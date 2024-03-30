'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'home', href: '/' },
  {
    name: 'products',
    href: '/products',
  },
  { name: 'contact us', href: '/contact' },
];

export function NavLinks({ mob }: { mob: boolean }) {
  const pathname = '/' + usePathname().split('/')[1];
  return (
    <>
      <nav
        className={clsx(mob ? 'flex flex-col gap-[39px]' : 'hidden md:flex')}
      >
        {links.map(link => (
          <Link
            key={link.name}
            className={clsx(
              'font-bold uppercase flex justify-center items-center rounded-[2px]',
              '',
              mob
                ? pathname === link.href
                  ? 'text-lg text-black bg-white w-[164px] h-[50px]'
                  : 'text-lg text-white w-[164px] h-[50px] hover:bg-white hover:text-black'
                : pathname === link.href
                ? 'text-xs bg-[#363636] text-white w-[138px] h-[46px]'
                : 'text-xs text-[#363636] w-[138px] h-[46px] hover:bg-[#363636] hover:text-white'
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
