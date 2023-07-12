import React from "react";
import { useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../config/firebase.js";
import { v4 } from "uuid";

function UploadImageButton(props) {
  const [imageUpload, setImageUpload] = useState(null);
  // https://www.youtube.com/watch?v=YOAeBSCkArA&ab_channel=PedroTech

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${props.title + v4()}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert(`Image uploaded. ${props.title}`);
    });
  };

  return (
    <div>
      <input type="file" onChange={(e) => setImageUpload(e.target.files[0])}/>
      <button onClick={uploadFile}>Upload Image</button>
    </div>
  );
}

export default UploadImageButton;
