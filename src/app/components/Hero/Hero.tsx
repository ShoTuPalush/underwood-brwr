'use client';

import { getCategories } from '@/lib/api';
import { HeroImage } from '../HeroImage/HeroImage';

export async function Hero() {
  return (
    <>
      <div className="mt-[20px] mb-[40px] md:flex md:items-center md:flex-col md:mt-[33px] md:mb-[63px] lg:flex-row-reverse lg:justify-between">
        <HeroImage />
        <div className="flex flex-col justify-center">
          <h1 className=" text-3xl lg:text-5xl lg:w-[525px] uppercase text-[#363636] mb-[12px] md:mb[18px]">
            Modern Ukrainian brewery
          </h1>
          <p className="w-[307px] text-sm md:text-base md:w-[600px] lg:text-xl lg:w-[556px] text-[#363636] italic">
            We are sure that you will find something close to you, no matter
            what you like - a classic blanche or a mango milkshake, a strong
            stout or a light berliner. Even if you like sports, we have
            something for you.
          </p>
        </div>
      </div>
    </>
  );
}
