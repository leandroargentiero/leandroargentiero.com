export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const fetcherWithToken = (url: string, token: string) => {
  console.log(token);
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${token}`,
    },
  }).then((res) => res.json());
};
