import { randomColor } from '@/helpers/randomColor';
import { useWindowSize } from '@/hooks/useWindowSize/useWindowSize';
import { CategoryItems } from '@/lib/api';
import clsx from 'clsx';
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ICategoryItem } from '../CategoryList/CategoryList';

export const openSans = Open_Sans({ subsets: ['latin'] });

export function CategoryItem({ categor }: { categor: ICategoryItem }) {
  const width = useWindowSize();
  const color = randomColor();

  return (
    <>
      <li className="w-[327px] rounded-[13px] p-[24px] flex gap-[24px] border border-[#919191] shadow-3xl lg:w-[434px]">
        <div className="my-auto">
          <Image
            src={categor.strCategoryThumb}
            alt="meals"
            width={width > 1440 ? 156 : width > 877 ? 150 : 85}
            height={width > 1440 ? 98 : width > 877 ? 60 : 54}
          />
        </div>
        <div className=" grow">
          <h4 className="font-medium uppercase text-lg text-[#363636] mb-[10px] md:text-[#000] lg:text-2xl">
            {categor.strCategory}
          </h4>
          <p
            className={clsx(
              openSans.className,
              'w-[158px] h-[48px] text-xs text-[#484848] mb-[18px] line-clamp-3 md:text-sm lg:w-[204px] md:h-[60px]'
            )}
          >
            {categor.strCategoryDescription}
          </p>
          <p className="mb-[18px] font-bold uppercase text-xs text-[#363636]">
            Count meals: {categor.len}
          </p>
          <Link
            href={`/products/${categor.fId}`}
            style={{ backgroundColor: color }}
            className={clsx(
              `flex items-center gap-[10px] hover:gap-[40px] w-full h-[30px] pl-[16px] rounded-[2px]  text-xs text-[#363636] `
            )}
          >
            Read more{' '}
            <Image src={'/svg/arrow.svg'} alt="arrow" width={21} height={6} />
          </Link>
        </div>
      </li>
    </>
  );
}
