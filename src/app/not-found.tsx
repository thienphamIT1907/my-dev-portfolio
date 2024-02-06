'use client';

import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';

const MIN_INDEX = 1;
const MAX_INDEX = 4;

const NotFoundPage = () => {
  const generateRandomNotfoundId = () =>
    Math.floor(MIN_INDEX + Math.random() * (MAX_INDEX - MIN_INDEX + 1));

  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-y-4">
      <Image
        alt="Not Found"
        src={`not-found/not-found-${generateRandomNotfoundId()}.gif`}
        width="100%"
      />
      <Button>
        <Link href="/home">Back to Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
