export default function toQueryString(query: object): string {
  return Object.keys(query).reduce((str, key) => {
    const value = Array.isArray(query[key])
      ? query[key].filter(v => typeof v !== 'object').join(',')
      : query[key];

    if (value === undefined || value === null) {
      return str;
    }

    if (typeof value === 'object') {
      return str;
    }

    const res = (str && str + '&') + key + '=' + encodeURIComponent(value);

    return res;
  }, '');
}
