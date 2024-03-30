'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

interface IForm {
  name: string;
  phone: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.number().required('Phone is required').min(10).max(14),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export function Contact() {
  const router = useRouter();

  const handleSubmit = (values: IForm) => {};

  return (
    <>
      <div className="px-[24px] pt-[89px]">
        <button
          className="w-[24px] h-[24px] flex justify-center items-center absolute top-[38px] right-[16px]"
          onClick={() => router.back()}
        >
          <Image src={'/svg/closes.svg'} alt={'X'} width={24} height={24} />
        </button>
        <Image
          src={'/img/contactMob.png'}
          alt={'contact image'}
          width={327}
          height={160}
        />
        <h4 className="uppercase font-bold text-2xl text-[#363636] mt-[24px] mb-[12px]">
          contact us
        </h4>
        <p className="text-base text-[#414141] mb-[30px]">
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
              <div className="relative mb-[14px]">
                <Field
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className=""
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="absolute  text-red-500 text-xsm top-[53px] left-0"
                />
              </div>

              <div className="relative mb-[14px]">
                <Field
                  type="tel"
                  name="phone"
                  placeholder="Number of phone"
                  className=""
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="absolute  text-red-500 text-xsm top-[53px] left-0"
                />
              </div>

              <div className="relative mb-[24px]">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className=""
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="absolute  text-red-500 text-xsm top-[53px] left-0"
                />
              </div>

              <button type="submit" className="" disabled={isSubmitting}>
                send request
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
