import useSWR from 'swr';

import { fetcherWithToken } from '@/hooks/fetcher';

interface IUnsplashStatCard {
  label: string;
  value: any;
}

export const UnsplahStatCard = ({ label, value }: IUnsplashStatCard) => {
  return (
    <div className="w-1/2 rounded-xl border border-gray-200 p-6 text-center dark:border-gray-700">
      <a
        href="https://unsplash.com/@leaero"
        target="_blank"
        className="font-body text-sm text-gray-400 hover:underline md:text-base"
        rel="noreferrer"
      >
        {label}
      </a>
      <h3 className="mt-4 font-display text-3xl text-gray-900 dark:text-gray-100">
        {value}
      </h3>
    </div>
  );
};

export const UnsplashStats = () => {
  const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
  const { data } = useSWR(
    ['https://api.unsplash.com/users/leaero/statistics', API_KEY],
    fetcherWithToken
  );

  return (
    <div className="mx-auto my-5 flex max-w-xl flex-row justify-between gap-2 md:my-12 md:gap-8">
      <UnsplahStatCard
        label="Unsplash Views"
        value={data ? data?.views.total.toLocaleString('fr-FR') : '-'}
      />
      <UnsplahStatCard
        label="Unsplash Downloads"
        value={data ? data?.downloads.total.toLocaleString('fr-FR') : '-'}
      />
    </div>
  );
};
