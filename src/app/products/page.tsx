'use client';

import { useQuery } from '@tanstack/react-query';
import { getRandomMeals } from '@/lib/api';
import { MealPageComponent } from '../components/MealPageComponent/MealPageComponent';
import { CardSkeleton } from '../components/Skeletons/Skeletons';

interface Meals {
  [key: string]: any;
}

export default function Product() {
  const { data, isFetching } = useQuery<{ meals: Meals }, string>({
    queryKey: ['random'],
    queryFn: getRandomMeals,
    refetchOnMount: 'always',
  });
  const meals = data?.meals[0];
  return (
    <>
      <div className="mt-[20px] mb-[123px] lg:w-[670px] mx-auto">
        {isFetching ? <CardSkeleton /> : <MealPageComponent meals={meals} />}
      </div>
    </>
  );
}
