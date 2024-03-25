import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from '../NavLinks/NavLinks';
import { MobMenu } from '../MobMenu/MobMenu';

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center">
        <Link
          href={'/'}
          className="w-[70px] h-[29px] relative md:w-[90px] md:h-[46px]"
        >
          <Image src={'/img/logo.png'} alt={'logo'} fill />
        </Link>
        <NavLinks mob={false} />
        <MobMenu />
      </header>
    </>
  );
}
