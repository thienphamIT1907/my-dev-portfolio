'use client';

import TimelineStyled from '@/components/WorksTimeline/styles';

const WorksTimeline = () => (
  <TimelineStyled
    items={[
      {
        color: 'green',
        label: '2015-09-01',
        children: 'Enouvo',
      },
      {
        color: 'red',
        label: '2015-09-01 ',
        children: 'Freelance',
      },
      {
        color: 'blue',
        label: '2015-09-01',
        children: 'ST United',
      },
    ]}
    mode="left"
  />
);

export default WorksTimeline;
