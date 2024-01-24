'use client';

import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

export default function AntdRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = React.useState(() => createCache());

  useServerInsertedHTML(() => (
    <style
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      id="antd"
    ></style>
  ));

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
