import ThemeToggleButton from '@/components/buttons/ThemeToggleButton';
import { ROUTES_PATH } from '@/routes';
import { Tab, Tabs } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { Key, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const [selectedTab, setSelectedTab] = useState(pathname);

  const handleSelectTabChange = (keyTab: Key) => {
    if (keyTab === 'theme') return;
    push(String(keyTab));
    setSelectedTab(String(keyTab));
  };

  const renderNavbarRoutes = () =>
    ROUTES_PATH.map(({ path, title }) => (
      <Tab
        className="p-3 text-sm tablet:p-6 tablet:text-lg"
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
        <Tab
          className="px-3 text-medium tablet:p-6 tablet:text-lg"
          key="theme"
          title={<ThemeToggleButton />}
        />
      </Tabs>
    </div>
  );
};

export default Navbar;
