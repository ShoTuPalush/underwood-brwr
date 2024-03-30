'use client';

import { useWindowSize } from '@/hooks/useWindowSize/useWindowSize';
import Image from 'next/image';

export function HeroImage() {
  const width = useWindowSize();

  return (
    <>
      <div className="relative w-[269px] h-[134px] md:w-[580px] md:h-[367px]">
        <Image
          className="rounded-[74px] mx-[29px] mb-[24px]"
          src={width > 767 ? '/img/hero.png' : '/img/heroMob.png'}
          alt="hero"
          fill
          priority={true}
        />
      </div>
    </>
  );
}
