import { ROUTES_PATH } from '@/routes';
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

  const renderNavbarRoutes = () =>
    ROUTES_PATH.map(({ path, title }) => (
      <Tab
        className="px-4 text-base tablet:p-6 tablet:text-lg"
        key={path}
        title={title}
      ></Tab>
    ));

  return (
    <div className="fixed left-[50%] top-[20px] translate-x-[-50%] tablet:top-[50px] ">
      <Tabs
        aria-label="Tabs radius"
        defaultSelectedKey={pathname}
        onSelectionChange={handleSelectTabChange}
        radius="full"
        selectedKey={selectedTab}
      >
        {renderNavbarRoutes()}
      </Tabs>
    </div>
  );
};

export default Navbar;
