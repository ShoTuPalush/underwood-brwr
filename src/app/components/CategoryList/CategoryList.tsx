'use client';

import { useWindowSize } from '@/hooks/useWindowSize/useWindowSize';
import { getCategories } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

interface CategoryItem {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface CategoryList {
  categories: CategoryItem[];
}

export function CategoryList() {
  const width = useWindowSize();
  const { data, isSuccess } = useQuery<CategoryList, string>({
    queryKey: ['categories'],
    queryFn: getCategories,
    refetchOnMount: 'always',
  });

  return (
    <>
      <h2 className=" uppercase text-xl text-[#363636] mb-[24px] md:text-4xl md:text-[#000] md:mb-[44px] lg:mb-[66px]">
        our products
      </h2>
      <ul className="flex flex-col gap-[20px] mb-[46px] md:flex-row md:flex-wrap md:gap-[34px] md:mb-[65px] lg:mb-[98px] lg:gap-[28px]">
        {isSuccess &&
          data.categories.map(categor => (
            <li
              key={categor.idCategory}
              className="w-[327px] rounded-[13px] p-[24px] flex gap-[24px] border border-[#919191] shadow-3xl lg:w-[434px]"
            >
              <div className="my-auto">
                <Image
                  src={categor.strCategoryThumb}
                  alt="meals"
                  width={width > 1440 ? 182 : width > 877 ? 150 : 85}
                  height={width > 1440 ? 114 : width > 877 ? 60 : 54}
                />
              </div>
              <div>
                <h4 className="font-medium uppercase text-lg text-[#363636] mb-[10px] md:text-xl md:text-[#000] lg:text-2xl">
                  {categor.strCategory}
                </h4>
                <p className="w-[158px] text-xs text-[#484848] mb-[18px] line-clamp-3 md:text-sm lg:w-[178px]">
                  {categor.strCategoryDescription}
                </p>
                <p className="mb-[18px]">|||||||||||||||||||||</p>
                <button className="flex items-center gap-[10px] w-full h-[30px] pl-[16px] rounded-[2px] bg-[#f3e1ff] text-xs text-[#363636] ">
                  Read more{' '}
                  <Image
                    src={'/svg/arrow.svg'}
                    alt="arrow"
                    width={21}
                    height={6}
                  />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
