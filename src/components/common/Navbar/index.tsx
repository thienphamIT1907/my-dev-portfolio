import { Tab, Tabs } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { Key, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const [selectedTab, setSelectedTab] = useState(pathname);

  const handleSelectTabChange = (keyTab: Key) => {
    push(String(keyTab));
    setSelectedTab(String(keyTab));
  };

  return (
    <div className="fixed left-[50%] top-[20px] translate-x-[-50%] tablet:top-[50px] ">
      <Tabs
        aria-label="Tabs radius"
        defaultSelectedKey={pathname}
        onSelectionChange={handleSelectTabChange}
        radius="full"
        selectedKey={selectedTab}
      >
        <Tab
          className="px-4 text-base tablet:p-6 tablet:text-lg"
          key="/"
          title="Works"
        ></Tab>
        <Tab
          className="px-4 text-base tablet:p-6 tablet:text-lg"
          key="/about"
          title="About"
        ></Tab>
        <Tab
          className="px-4 text-base tablet:p-6 tablet:text-lg"
          key="/blogs"
          title="Blogs"
        ></Tab>
        <Tab
          className="px-4 text-base tablet:p-6 tablet:text-lg"
          key="/hobbies"
          title="Hobbies"
        ></Tab>
      </Tabs>
    </div>
  );
};

export default Navbar;
