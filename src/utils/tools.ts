import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';

export const generateMetaDataByPage = (
  metaDataTitle: string | TemplateString | null | undefined,
  pageName: string,
) => `${metaDataTitle} • ${pageName}`;
