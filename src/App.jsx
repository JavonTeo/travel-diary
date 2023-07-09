import React, { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AddPopup from "./components/add_page/AddPopup";
import CardList from "./components/card_list/CardList";
import Page from "./components/page/Page";
import "./AppStyles.css";

function App() {
  const [pagesList, setPagesList] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const pagesCollectionRef = collection(db, "pages");

  const getPagesList = async () => {
    try {
      const data = await getDocs(pagesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPagesList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPagesList();
  }, []);

  const handlePageClick = (card) => {
    setSelectedPage(card);
  };

  return (
      <div>
        <div className="container d-flex flex-row justify-content-center align-items-center">
          <CardList pagesList={pagesList} onPageClick={handlePageClick} setOpenPopup={setOpenPopup}/>
          <Page selectedPage={selectedPage} />
        </div>
        <AddPopup openPopup={openPopup} setOpenPopup={setOpenPopup} dbCollection={pagesCollectionRef}/>
      </div>
  );
}

export default App;
