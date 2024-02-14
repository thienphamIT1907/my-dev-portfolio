import { Image } from '@nextui-org/react';

const Introduction = () => (
  <main className="flex w-full items-center mobile:flex-col mobile:justify-center tablet:flex-row tablet:justify-start">
    <section className="mobile:w-full mobile:text-center tablet:w-1/2">
      <h1 className="flex items-center font-extrabold before:content-['<'] after:content-['/>'] mobile:justify-center mobile:text-3xl tablet:text-[60px]">
        Hi, I&apos;m Thien
        <Image
          alt="hi-hand.png"
          className="mobile:mx-2 mobile:w-[35px] tablet:w-[60px]"
          src="/images/hi-hand.png"
        />
      </h1>
      <h2 className="mt-4 font-light mobile:text-lg mobile:leading-6  tablet:text-2xl tablet:leading-10">
        A frontend web developer loves to create amazing and beautiful UI based
        in Danang, Vietnam.
      </h2>
    </section>
    <section className="mobile:w-full tablet:w-1/2">
      <Image
        alt="intro.svg"
        height="100%"
        src="/images/intro.svg"
        width="100%"
      />
    </section>
  </main>
);

export default Introduction;
