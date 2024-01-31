import { twClassMerge } from '@/utils/tailwindCustom';
import {
  FaFacebookSquare,
  FaFilePdf,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';

const iconStyle = {
  color: 'white',
  size: 20,
};

type SocialHubProps = {
  className?: string;
};

const SocialHub = ({ className }: SocialHubProps) => (
  <div className={twClassMerge('flex gap-4', className && className)}>
    <FaFacebookSquare {...iconStyle} />
    <FaGithub {...iconStyle} />
    <FaTwitter {...iconStyle} />
    <FaFilePdf {...iconStyle} />
  </div>
);

export default SocialHub;
