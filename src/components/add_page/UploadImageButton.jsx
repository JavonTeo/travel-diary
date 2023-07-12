import React from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "src/config/firebase.js";
  import { v4 } from "uuid";

function UploadImageButton() {
    const [imageUpload, setImageUpload] = useState(null);
    // https://www.youtube.com/watch?v=YOAeBSCkArA&ab_channel=PedroTech
    
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      };

    return (
        <button>Upload Image</button>
    );
}

export default UploadImageButton;