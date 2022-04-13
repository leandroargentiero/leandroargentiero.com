export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const fetcherWithToken = async (url: string, token: string) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${token}`,
    },
  }).then((res) => res.json());
};
