import React, { useEffect, useState } from "react";
import CardList from "./components/card_list/CardList";
import Page from "./components/page/Page";
import "./AppStyles.css";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [pagesList, setPagesList] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  const pagesCollectionRef = collection(db, "pages");

  const getDiariesList = async () => {
    try {
      const data = await getDocs(pagesCollectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      setPagesList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDiariesList();
  }, []);

  const handlePageClick = (card) => {
    setSelectedPage(card);
  };

  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <CardList pagesList={pagesList} onPageClick={handlePageClick} />
      <Page selectedPage={selectedPage} />
    </div>
  );
}

export default App;
