'use client';

import { useWindowSize } from '@/hooks/useWindowSize/useWindowSize';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { openSans } from '../CategoryItem/CategoryItem';
import { Meals } from '@/lib/api';

export function MealPageComponent({ meals }: { meals: Meals }) {
  const width = useWindowSize();
  const [truncate, setTruncate] = useState(false);
  return (
    <>
      <div className="flex gap-[24px] ">
        <div className="my-auto shrink-0">
          <Image
            src={meals.strMealThumb}
            alt="meals"
            width={width > 1440 ? 156 : width > 877 ? 150 : 85}
            height={width > 1440 ? 156 : width > 877 ? 150 : 85}
          />
        </div>
        <div className="">
          <h4 className="font-medium uppercase text-lg text-[#000] mb-[10px] lg:text-2xl">
            {meals.strMeal}
          </h4>
          <p
            className={clsx(
              openSans.className,
              meals.strInstructions.length > 1000
                ? !truncate && 'line-clamp-[9]'
                : 'mb-[18px]',
              'text-xs text-[#484848] md:text-sm'
            )}
          >
            {meals.strInstructions}
          </p>
          {meals.strInstructions.length > 1000 && (
            <button
              className="mb-[18px] border text-xs text-[#484848]"
              onClick={() => setTruncate(!truncate)}
            >
              hide...
            </button>
          )}

          <p className="font-bold uppercase text-sm md:text-xs text-[#363636]">
            Country: {meals.strArea}
          </p>
        </div>
      </div>
    </>
  );
}
