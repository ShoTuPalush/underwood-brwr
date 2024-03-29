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
        <Link href={'/'} className="relative">
          <Image
            src={width > 767 ? '/img/logoDesk.png' : '/img/logoMob.png'}
            alt={'logo'}
            width={width > 767 ? 90 : 70}
            height={width > 767 ? 46 : 29}
          />
        </Link>
        <NavLinks mob={false} />
        <MobMenu />
      </header>
    </>
  );
}
