'use client';

import { getCategories } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { CategoryRandomItem } from '../CategoryRandomItem/CategoryRandomItem';

interface ICategoryItem {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
  len: number;
  fId: string;
}

export function CategoryList() {
  const { data, isSuccess } = useQuery<ICategoryItem[], string>({
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
          data.map(categor => (
            <CategoryItem key={categor.idCategory} categor={categor} />
          ))}
        <CategoryRandomItem />
      </ul>
    </>
  );
}
