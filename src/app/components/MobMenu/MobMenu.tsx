'use client';

import Image from 'next/image';
import { NavLinks } from '../NavLinks/NavLinks';
import { useState } from 'react';

export function MobMenu() {
  const [openMobMenu, setOpenMobMenu] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpenMobMenu(true)}
        className="block md:hidden cursor-pointer"
      >
        <Image
          src={'/svg/menu.svg'}
          alt={'burger-menu'}
          width={24}
          height={24}
        />
      </button>
      {openMobMenu && (
        <div className="md:hidden flex justify-center items-center absolute top-0 left-0 w-lvw h-lvh z-10 bg-[#324784]">
          <button
            onClick={() => setOpenMobMenu(false)}
            className="absolute right-[16px] top-[38px]"
          >
            <Image src={'/svg/close.svg'} alt={'X'} width={24} height={24} />
          </button>
          <NavLinks mob={true} />
        </div>
      )}
    </>
  );
}
