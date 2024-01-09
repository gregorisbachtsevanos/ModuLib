import { Crop } from 'react-image-crop';

export const getCroppedImage = async (
  image: HTMLImageElement,
  crop: Crop,
  fileName: string,
  fileType: string,
  quality: number = 1
) => {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const pixelRatio = window.devicePixelRatio;
  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);
  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;
  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = 'high';
  ctx.save();

  ctx.translate(-cropX, -cropY);
  ctx.translate(centerX, centerY);
  ctx.scale(1, 1);
  ctx.translate(-centerX, -centerY);

  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );
  ctx.restore();

  // As Base64 string
  // const base64Image = canvas.toDataURL('image/jpeg');

  // As a blob
  const blob = (await new Promise((resolve, reject) => {
    canvas.toBlob(
      (file) => {
        if (!file) return;
        resolve(file);
      },
      fileType,
      quality
    );
  })) as Blob;

  return new File([blob], fileName, { type: fileType });
};
