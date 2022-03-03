// (c) 2010-2013 Diego Perini (http://www.iport.it)
// https://gist.github.com/dperini/729294

const URL_REGEX = /(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?/i;

export const getFirstUrl = (url: string) => {
  const match = url.match(URL_REGEX);

  return match?.[0];
};

// TODO: need tests
export const splitTextWithUrls = (url: string) => {
  const result: string[] = [];
  let index = url.search(URL_REGEX);

  while (index !== -1) {
    result.push(url.substr(0, index));
    const match = URL_REGEX.exec(url);
    if (match) {
      result.push(match[0]);
      if (index + match[0].length === 0) {
        break;
      }
      url = url.substr(index + match[0].length);
    }
    index = url.search(URL_REGEX);
  }
  if (url.length > 0) {
    result.push(url);
  }

  return result;
};
