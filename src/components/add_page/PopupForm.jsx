import React, { useState } from 'react';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import Datepicker from './Datepicker';
import { addDoc, Timestamp } from 'firebase/firestore';

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
    <form onSubmit={addToDB}>
        <MDBInput className="mt-3" label='Page Title' id='title' type='text' onChange={(e) => setTitle(e.target.value)} required />
        <Datepicker label='Date visited' updateChange={setDateVisited} />
        <MDBInput className="mt-3" label='Rating' id='typeNumber' type='number' min="1" max="5" onChange={(e) => setRating(Number(e.target.value))} required />
        <MDBTextArea className="mt-3" label='Description' id='textAreaExample' rows={10} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default PopupForm;