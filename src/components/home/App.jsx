import React, { useContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// components
import { auth, db } from "../../config/firebase";
import "./AppStyles.css";
import CardList from "./card_list/CardList";
import Page from "./page/Page";
import AddPopup from "./addPage_popup/AddPopup";
import { AuthContext } from "../authentication/AuthContextProvider";

function App() {
  const [pagesList, setPagesList] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const currentUserID = currentUser.uid;
  const pagesCollectionRef = collection(db, `diaries/${currentUserID}/pages`);

  // real time collection data
  useEffect(() => {
    const unsubscribe = onSnapshot(pagesCollectionRef, (snapshot) => {
      const updatedPagesList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPagesList(updatedPagesList);
    });

    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("logged Out");
      //to do: check how to edit the currentUser context.
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="main-container d-flex">
    <CardList pagesList={pagesList} setSelectedPage={setSelectedPage} setOpenPopup={setOpenPopup}/>
    <div className="col-9 d-flex justify-content-center align-items-center">
      <Page selectedPage={selectedPage} />
    </div>
    <button className="btn btn-warning position-fixed top-0 end-0 m-2" onClick={logOut}>Sign out</button>
    <AddPopup openPopup={openPopup} setOpenPopup={setOpenPopup} pagesCollectionRef={pagesCollectionRef}/>
  </div>
  );
}

export default App;
