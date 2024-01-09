export const resizeImage = async (
  imageEl: HTMLImageElement,
  maxWidth?: number,
  maxHeight?: number
) => {
  // Initialize the canvas and it's size
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const { width: canvasWidth, height: canvasHeight } = calculateDimensions(
    imageEl,
    maxWidth,
    maxHeight
  );

  // Set width and height
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Draw image and export to a data-uri
  ctx.drawImage(imageEl, 0, 0, canvas.width, canvas.height);
  const dataURI = canvas.toDataURL();

  return dataURI;
};

const calculateDimensions = (
  imageEl: HTMLImageElement,
  maxWidth: number = 0,
  maxHeight: number = 0
) => {
  if (!maxWidth) {
    const calculatedWidth = (maxHeight * imageEl.naturalWidth) / imageEl.naturalHeight;
    return { width: calculatedWidth, height: maxHeight };
  }
  if (!maxHeight) {
    const calculatedHeight = (maxWidth * imageEl.naturalHeight) / imageEl.naturalWidth;
    return { width: maxWidth, height: calculatedHeight };
  }
  return { width: maxWidth, height: maxHeight };
};
