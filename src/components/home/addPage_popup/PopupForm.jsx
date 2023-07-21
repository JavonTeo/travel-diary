import React, { useState } from 'react';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from "uuid";

// components
import Datepicker from './Datepicker.jsx';
import { storage } from '../../../config/firebase.js';

function PopupForm({ pagesCollectionRef, setOpenPopup }) {
  const [title, setTitle] = useState('');
  const [dateVisited, setDateVisited] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [imageURLs, setImageURLs] = useState('');

  const [imageUpload, setImageUpload] = useState(null);
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${title + v4()}/${imageUpload.name + v4()}`);
    return uploadBytes(imageRef, imageUpload).then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    });
  };

  const addToDB = async (e) => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    // Check if the trimmed values are empty
    if (trimmedTitle === '' || trimmedDescription === '') {
      console.log('Input cannot be empty or contain only spaces');
      return;
    }

    let foundURL = '';
    e.preventDefault();

    await uploadFile().then((url) => {
      foundURL = url;
    });

    addDoc(pagesCollectionRef, {
      title: title,
      dateVisited: Timestamp.fromDate(new Date(dateVisited)),
      rating: rating,
      description: description,
      imageURLs: foundURL
    }).then(() => {
      e.target.reset(); //TODO: need to propogate downwards to input field in Datepicker
      setOpenPopup(false);
    })
    .catch((error) => console.error(error));
  }

  return (
    <form className="mx-2" onSubmit={addToDB}>
      {/* have to make sure space inputs are not allowed */}
        <MDBInput className="w-50 mt-3" label='Page Title' id='title' type='text' onChange={(e) => setTitle(e.target.value)} required />
        <Datepicker label='Date visited' updateChange={setDateVisited} />
        <MDBInput className="mt-3" label='Rating' id='typeNumber' type='number' min="1" max="5" onChange={(e) => setRating(Number(e.target.value))} required />
        <MDBTextArea className="my-3" label='Description' id='textAreaExample' rows={10} onChange={(e) => setDescription(e.target.value)} required />
        <label htmlFor="formFile" className="form-label">Choose a cover photo</label>
        <input className="form-control" type="file" id="formFile" onChange={(e) => setImageUpload(e.target.files[0])} />
        <button type="submit" className="my-3 btn btn-primary">Submit</button>
    </form>
  )
}

export default PopupForm;