const createImageFromFile = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    try {
      const URL = window.URL || window.webkitURL;

      const imgUrl = URL.createObjectURL(file);

      image.src = imgUrl;

      image.onload = () => {
        resolve(image);
      };
    } catch (e) {
      try {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            image.src = reader.result;

            image.onload = () => {
              resolve(image);
            };

            image.onerror = loadError => {
              reject(loadError);
            };
          }
        };

        reader.onerror = e => {
          reject(e);
        };

        reader.readAsDataURL(file);
      } catch (e) {
        reject(e);
      }
    }
  });
};

export default createImageFromFile;
