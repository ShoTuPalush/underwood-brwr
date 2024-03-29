'use client';

import { useQuery } from '@tanstack/react-query';
import { getRandomMeals } from '@/lib/api';
import { MealPageComponent } from '../components/MealPageComponent/MealPageComponent';

interface Meals {
  [key: string]: any;
}

export default function Product() {
  const { data, isSuccess } = useQuery<{ meals: Meals }, string>({
    queryKey: ['random'],
    queryFn: getRandomMeals,
    refetchOnMount: 'always',
  });
  const meals = data?.meals[0];
  return (
    <>
      <div className="mt-[20px] mb-[123px]">
        {isSuccess && <MealPageComponent meals={meals} />}
      </div>
    </>
  );
}
