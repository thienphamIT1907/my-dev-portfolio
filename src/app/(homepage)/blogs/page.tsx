import { META_DATA } from '@/config/metadata';
import { generateMetaDataByPage } from '@/utils/tools';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...META_DATA,
  title: generateMetaDataByPage(META_DATA.title, 'Blogs'),
};
const BlogsPage = () => <div>BlogsPage</div>;

export default BlogsPage;
