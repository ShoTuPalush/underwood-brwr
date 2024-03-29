'use client';

import { MealPageComponent } from '@/app/components/MealPageComponent/MealPageComponent';
import { getMeals } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

interface Meals {
  [key: string]: any;
}

export default function Product() {
    const router: string = usePathname().split('/')[2];
    
  const { data, isSuccess } = useQuery<{ meals: Meals }, string>({
    queryKey: ['meals'],
    queryFn: () => getMeals({ i: router }),
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
