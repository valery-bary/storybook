import React, { useState} from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function ImageCropper({ imageToCrop, onImageCropped }) {
  const [cropConfig, setCropConfig] = useState({
    unit: "%",
    width: 100,
    height: 100, 
    x: 0, 
    y: 0, 
  });

  const [imageRef, setImageRef] = useState();

  async function cropImage(crop) {
    if (imageRef && crop.width && crop.height) {
      const croppedImage = await getCroppedImage(
        imageRef.target,
        crop,
        "croppedImage.jpeg"
      );

      onImageCropped(croppedImage);
    }
  }

  function getCroppedImage(sourceImage, cropConfig, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = sourceImage.naturalWidth / sourceImage.width;
    const scaleY = sourceImage.naturalHeight / sourceImage.height;
    canvas.width = cropConfig.width;
    canvas.height = cropConfig.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      sourceImage,
      cropConfig.x * scaleX,
      cropConfig.y * scaleY,
      cropConfig.width * scaleX,
      cropConfig.height * scaleY,
      0,
      0,
      cropConfig.width,
      cropConfig.height
    );

    return new Promise((resolve, reject) => {
      const base64 = canvas.toDataURL("image/jpeg");
      if (!base64) {
        reject(new Error("Canvas is empty"));
        return;
      }

      resolve(base64);
    });
  }

  return (
    <ReactCrop
      style={{ width: "30%" }}
      aspect={1 / 1}
      crop={cropConfig}
      onComplete={(cropConfig) => cropImage(cropConfig)}
      onChange={(cropConfig) => setCropConfig(cropConfig)}
    >
      <img
        alt="Crop me"
        src={imageToCrop}
        onLoad={(imageRef) => setImageRef(imageRef)}
      />
    </ReactCrop>
  );
}

export default ImageCropper;
