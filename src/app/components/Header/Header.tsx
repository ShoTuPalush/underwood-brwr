'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from '../NavLinks/NavLinks';
import { MobMenu } from '../MobMenu/MobMenu';
import { useWindowSize } from '@/hooks/useWindowSize/useWindowSize';

export function Header() {
  const width = useWindowSize();

  return (
    <>
      <header className="flex justify-between items-center">
        <Link
          href={'/'}
          className="relative w-[70px] h-[29px] md:w-[90px] md:h-[46px]"
        >
          <Image
            className=""
            src={width > 767 ? '/img/logoDesk.png' : '/img/logoMob.png'}
            alt={'logo'}
            fill
          />
        </Link>
        <NavLinks mob={false} />
        <MobMenu />
      </header>
    </>
  );
}
