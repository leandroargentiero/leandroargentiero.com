import type { NextPage } from 'next';

import PageDetailShell from '@/components/Layout/PageDetailShell';
import { useScrollIndicator } from '@/hooks/useScrollIndicator';

const About: NextPage = () => {
  const [state] = useScrollIndicator({ initialValue: 2 });

  return (
    <>
      <PageDetailShell>
        <h2>Hello World</h2>
      </PageDetailShell>
    </>
  );
};

export default About;
