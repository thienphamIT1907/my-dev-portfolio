import Copyright from '@/components/common/Copyright';
import SocialHub from '@/components/SocialHub';
import { Avatar } from '@nextui-org/react';

const Footer = () => (
  <footer className=" bg-black p-8">
    <div className="flex max-w-[1280px] flex-col items-center justify-center text-center tablet:mx-auto tablet:flex-row tablet:justify-between">
      <section className="flex flex-col items-stretch gap-y-10 text-2xl text-white tablet:text-left">
        <section>
          <p className="font-medium tablet:inline-block">Have an idea?</p>{' '}
          <span className="tablet:inline-block">
            Let&apos;s talk about it ;)
          </span>
        </section>
        <section className="text-gray-300">
          <p className=" text-base text-gray-500">Say Hello! to me 👋🏻</p>
          <p className="text-lg">phamanhthien1907@gmail.com</p>
        </section>
        <Copyright />
      </section>
      <div className="hidden flex-col justify-center tablet:flex">
        <section className="hidden items-center justify-center gap-4 tablet:flex">
          <Avatar
            className="text-6xl"
            name="T"
            src="/images/avatar.jpeg"
            showFallback
          />
          <section className="text-left leading-7">
            <p className="text-lg font-bold text-white">Thien Pham</p>
            <p className="text-sm text-gray-400">Frontend Developer</p>
          </section>
        </section>
        <SocialHub className="my-6 hidden tablet:flex" />
      </div>
    </div>
  </footer>
);

export default Footer;
