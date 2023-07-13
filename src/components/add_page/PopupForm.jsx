import React, { useState } from 'react';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { addDoc, Timestamp } from 'firebase/firestore';
import Datepicker from './Datepicker';
import UploadImageButton from './UploadImageButton';

function PopupForm({ dbCollection }) {
  const [title, setTitle] = useState('');
  const [dateVisited, setDateVisited] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const addToDB = (e) => {
    e.preventDefault();

    addDoc(dbCollection, {
      title: title,
      dateVisited: Timestamp.fromDate(new Date(dateVisited)),
      rating: rating,
      description: description
    }).then(() => {
      e.target.reset(); //TODO: need to propogate downwards to input field in Datepicker
    })

    console.log("submitted");
  }

  return (
    <div>
    <form onSubmit={addToDB}>
      {/* have to make sure space inputs are not allowed */}
        <MDBInput className="mt-3" label='Page Title' id='title' type='text' onChange={(e) => setTitle(e.target.value)} required />
        <Datepicker label='Date visited' updateChange={setDateVisited} />
        <MDBInput className="mt-3" label='Rating' id='typeNumber' type='number' min="1" max="5" onChange={(e) => setRating(Number(e.target.value))} required />
        <MDBTextArea className="mt-3" label='Description' id='textAreaExample' rows={10} onChange={(e) => setDescription(e.target.value)} required />
        {/* <UploadImageButton /> */}
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <UploadImageButton title={title} />
    </div>
  )
}

export default PopupForm;