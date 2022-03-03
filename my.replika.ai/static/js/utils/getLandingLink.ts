export default () => {
  if (typeof window === 'undefined') {
    return 'https://replika.ai';
  }

  const { hostname } = window.location;
  if (hostname === 'my.replika.ai' || hostname === 'localhost') {
    return 'https://replika.ai';
  } else {
    return `https://${hostname.replace(/^my-/, '')}`;
  }
};
