// https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side/32490603#32490603
const getImageOrientation = (file: Blob): Promise<number> => {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      if (!event.target) {
        return resolve(-1);
      }

      const fr = event.target as FileReader;
      const view = new DataView(fr.result as ArrayBuffer);

      if (view.getUint16(0, false) !== 0xffd8) {
        return resolve(-2);
      }

      const length = view.byteLength;
      let offset = 2;

      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) {
          return resolve(-1);
        }
        const marker = view.getUint16(offset, false);
        offset += 2;

        if (marker === 0xffe1) {
          if (view.getUint32((offset += 2), false) !== 0x45786966) {
            return resolve(-1);
          }

          const little = view.getUint16((offset += 6), false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          const tags = view.getUint16(offset, little);
          offset += 2;
          for (let i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) === 0x0112) {
              return resolve(view.getUint16(offset + i * 12 + 8, little));
            }
          }
        } else if ((marker & 0xff00) !== 0xff00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }
      return resolve(-1);
    };

    reader.readAsArrayBuffer(file);
  });
};

export default getImageOrientation;
