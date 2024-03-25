import Image from 'next/image';

export function Hero() {
  return (
    <>
      <div className="mt-[20px] mb-[40px] md:mt-[33px] md:mb-[63px]">
        <div className="block md:hidden">
          <Image
            className="rounded-[74px] mx-[29px] mb-[24px]"
            src={'/img/heroMob.png'}
            alt="hero"
            width={269}
            height={134}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className=" text-3xl lg:text-5xl lg:w-[525px] uppercase text-[#363636] mb-[12px] md:mb[18px]">
              Modern Ukrainian brewery
            </h1>
            <p className="w-[307px] text-sm md:text-base lg:text-xl lg:w-[556px] text-[#363636] italic">
              We are sure that you will find something close to you, no matter
              what you like - a classic blanche or a mango milkshake, a strong
              stout or a light berliner. Even if you like sports, we have
              something for you.
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              className="rounded-[161px]"
              src={'/img/hero.png'}
              alt="hero"
              width={580}
              height={367}
            />
          </div>
        </div>
      </div>
    </>
  );
}
