import clsx from 'clsx';
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

export const openSans = Open_Sans({ subsets: ['latin'] });

export function CategoryRandomItem() {
  return (
    <>
      <li className="w-[327px] rounded-[13px] p-[24px] flex gap-[24px] border border-[#919191] shadow-3xl lg:w-[434px]">
        <div className="my-auto flex justify-center items-center w-[85px] h-[54px] md:w-[150px] md:h-[60px] lg:w-[156px] lg:h-[98px] bg-[#f1deff] rounded-[11px]">
          <span className="uppercase text-[#333] text-[40px] md:text-[80px]">
            ?
          </span>
        </div>
        <div className=" grow">
          <h4 className="font-medium uppercase text-lg text-[#363636] mb-[10px] md:text-[#000] lg:text-2xl">
            surprise
          </h4>
          <p
            className={clsx(
              openSans.className,
              'w-[158px] h-[48px] text-xs text-[#484848] mb-[18px] line-clamp-3 md:text-sm lg:w-[204px] md:h-[60px]'
            )}
          >
            Do you want to try something new?
          </p>
          <p className="mb-[18px] font-bold uppercase text-xs text-[#363636]">
            Count meals: **
          </p>
          <Link
            href={'/products'}
            className="flex items-center gap-[10px] w-full h-[30px] pl-[16px] rounded-[2px] bg-[#f3e1ff] text-xs text-[#363636] "
          >
            Read more{' '}
            <Image src={'/svg/arrow.svg'} alt="arrow" width={21} height={6} />
          </Link>
        </div>
      </li>
    </>
  );
}
