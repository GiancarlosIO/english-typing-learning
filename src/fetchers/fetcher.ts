async function fetcher<TData = {}>(url: string, options = {}) {
  const res = await fetch(url, {
    ...options,
  });
  const data = await res.json();

  return data as TData;
}

export default fetcher;
