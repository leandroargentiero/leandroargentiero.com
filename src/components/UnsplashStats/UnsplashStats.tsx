import useSWR from 'swr';

import { fetcherWithToken } from '@/hooks/fetcher';

interface IUnsplashStatCard {
  label: string;
  value: any;
}

export const UnsplahStatCard = ({ label, value }: IUnsplashStatCard) => {
  return (
    <div className="w-1/2 rounded-xl border border-gray-200 p-3 text-center dark:border-gray-700 sm:p-6">
      <a
        href="https://unsplash.com/@leaero"
        target="_blank"
        className="font-body text-sm text-gray-400 no-underline hover:underline"
        rel="noreferrer"
      >
        {label}
      </a>
      <h3 className="mt-2 font-display text-3xl text-gray-900 dark:text-gray-100 sm:mt-4">
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
    <div className="mx-auto mt-9 mb-10 flex max-w-xl flex-row justify-between gap-2 md:my-12 md:gap-8">
      <UnsplahStatCard
        label="Unsplash views"
        value={data ? data?.views.total.toLocaleString('fr-FR') : '-'}
      />
      <UnsplahStatCard
        label="Unsplash downloads"
        value={data ? data?.downloads.total.toLocaleString('fr-FR') : '-'}
      />
    </div>
  );
};
