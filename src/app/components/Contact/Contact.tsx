'use client';

import { useWindowSize } from '@/hooks/useWindowSize/useWindowSize';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

interface IForm {
  name: string;
  phone: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.number().required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export function Contact() {
  const width = useWindowSize();
  const router = useRouter();

  const onDismiss = () => {
    if (width > 767) {
      document.documentElement.className = '';
    }
    router.back();
  };

  const handleSubmit = (values: IForm) => {
    toast.success('Send your contact');
    console.log(values);
  };

  return (
    <>
      <div className="w-[375px] h-auto bg-[white] border-none px-[24px] pt-[89px] pb-[100px] md:w-[768px] md:flex md:gap-[60px] md:p-[80px] lg:w-[1097px]">
        <button
          className="w-[24px] h-[24px] flex justify-center items-center absolute top-[38px] right-[16px] md:top-[20px] md:right-[20px]"
          onClick={onDismiss}
        >
          <Image src={'/svg/closes.svg'} alt={'X'} width={24} height={24} />
        </button>
        <Image
          src={width > 767 ? '/img/contactDesk.png' : '/img/contactMob.png'}
          alt={'contact image'}
          width={width > 1440 ? 378 : width > 767 ? 290 : 327}
          height={width > 1440 ? 422 : width > 767 ? 318 : 160}
        />
        <div className="lg:grow lg:pt-[6px]">
          <h4 className="uppercase font-bold text-2xl text-[#363636] mt-[24px] mb-[12px] md:mt-0 lg:text-[40px] lg:mb-[24px]">
            contact us
          </h4>
          <p className="text-base md:text-sm text-[#414141] mb-[30px] lg:text-2xl lg:mb-[50px]">
            Fiil in the contact form and send request.
          </p>
          <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="">
                <div className="relative mb-[36px] lg:mb-[40px]">
                  <Field
                    type="text"
                    name="name"
                    placeholder=" "
                    className="peer border-b-[1px] text-sm w-full text-[#414141] h-[22px] border-[#324784] focus:outline-none focus:bg-white lg:h-[29px] lg:text-lg"
                  />
                  <span
                    className="absolute top-0 left-0 bg-transparent text-sm text-[#414141] lg:text-lg
                    peer-focus:-top-4 peer-hover:-top-4 peer-[:not(:placeholder-shown)]:-top-4 
                    lg:peer-focus:-top-6 lg:peer-hover:-top-6 lg:peer-[:not(:placeholder-shown)]:-top-6"
                  >
                    Your name
                  </span>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="absolute top-[28px] text-red-500 text-xs left-0"
                  />
                </div>

                <div className="relative mb-[36px] lg:mb-[40px]">
                  <Field
                    type="tel"
                    name="phone"
                    placeholder=" "
                    className="peer border-b-[1px] text-sm w-full text-[#414141] h-[22px] border-[#324784] focus:outline-none focus:bg-white lg:h-[29px] lg:text-lg"
                  />
                  <span
                    className="absolute top-0 left-0 bg-transparent text-sm text-[#414141] lg:text-lg
                    peer-focus:-top-4 peer-hover:-top-4 peer-[:not(:placeholder-shown)]:-top-4
                    lg:peer-focus:-top-6 lg:peer-hover:-top-6 lg:peer-[:not(:placeholder-shown)]:-top-6"
                  >
                    Number of phone
                  </span>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="absolute top-[28px] text-red-500 text-xs left-0"
                  />
                </div>

                <div className="relative mb-[30px] lg:mb-[50px]">
                  <Field
                    type="email"
                    name="email"
                    placeholder=" "
                    className="peer border-b-[1px] text-sm w-full text-[#414141] h-[22px] border-[#324784] focus:outline-none focus:bg-white lg:h-[29px] lg:text-lg"
                  />
                  <span
                    className="absolute top-0 left-0 bg-transparent text-sm text-[#414141] lg:text-lg
                    peer-focus:-top-4 peer-hover:-top-4 peer-[:not(:placeholder-shown)]:-top-4
                    lg:peer-focus:-top-6 lg:peer-hover:-top-6 lg:peer-[:not(:placeholder-shown)]:-top-6"
                  >
                    Email
                  </span>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="absolute top-[28px] text-red-500 text-xs left-0"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[50px] bg-[#363636] rounded-[2px] flex justify-center items-center font-bold text-base text-white uppercase lg:h-[60px]"
                  disabled={isSubmitting}
                >
                  send request
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Toaster />
    </>
  );
}
