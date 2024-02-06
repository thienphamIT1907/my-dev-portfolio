import { META_DATA } from '@/config/metadata';
import { generateMetaDataByPage } from '@/utils/tools';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...META_DATA,
  title: generateMetaDataByPage(META_DATA.title, 'Hobbies'),
};

const HobbiesPage = () => <div>HobbiesPage</div>;

export default HobbiesPage;
