'use client';

import { useWindowSize } from '@/hooks/useWindowSize/useWindowSize';
import Image from 'next/image';

export function HeroImage() {
  const width = useWindowSize();

  return (
    <>
      <Image
        className="rounded-[74px] mx-[29px] mb-[24px]"
        src={width > 767 ? '/img/hero.png' : '/img/heroMob.png'}
        alt="hero"
        width={width > 767 ? 580 : 269}
        height={width > 767 ? 367 : 134}
        priority={true}
      />
    </>
  );
}
