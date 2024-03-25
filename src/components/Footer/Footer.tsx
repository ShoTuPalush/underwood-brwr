import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <>
      <footer className="bg-[#363636] p-[24px] md:flex md:flex-row-reverse md:justify-around md:items-center relative">
        <Link
          className="text-white text-xs lg:text-base leading-[1.83] flex items-center gap-[16px] absolute right-[24px] md:relative"
          href={'#'}
        >
          Follow us{' '}
          <Image
            src={'/svg/social.svg'}
            alt={'Facebook'}
            width={24}
            height={24}
          />
        </Link>
        <div className="flex flex-col md:flex-row gap-[12px] md:gap-[20px] mb-[27px] md:m-0">
          <Link
            className="text-white text-xs lg:text-base underline"
            href={'#'}
          >
            Privacy Policy
          </Link>
          <Link
            className="text-white text-xs lg:text-base underline"
            href={'#'}
          >
            Terms of delivery
          </Link>
        </div>
        <p className="text-xs lg:text-base leading-[1.83] text-white">
          © 2023 Underwood Brwr, Inc. All rights reserved.
        </p>
      </footer>
    </>
  );
}
