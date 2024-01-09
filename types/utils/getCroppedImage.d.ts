import { Crop } from 'react-image-crop';
export declare const getCroppedImage: (image: HTMLImageElement, crop: Crop, fileName: string, fileType: string, quality?: number) => Promise<File | undefined>;
