import React, { useContext } from "react";
import "./CardStyles.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../../config/firebase";
import { AuthContext } from "../../authentication/AuthContextProvider";
import { deleteObject, listAll, ref } from "firebase/storage";

function Card(props) {
  const { pageId, title, img, isSelected, onClick } = props;

  const { currentUser } = useContext(AuthContext);
  const currentUserID = currentUser.uid;

  const deleteImagesFolder = async (folderPath) => {
    try {
      const folderRef = ref(storage, folderPath);
      const folderFiles = await listAll(folderRef);
  
      // Delete all files in the folder
      await Promise.all(folderFiles.items.map((file) => deleteObject(file)));
  
      // Delete the folder itself
      await deleteObject(folderRef);
  
      console.log("Folder deleted successfully!");
    } catch (error) {
      if (error.code === "storage/object-not-found") {
        // The folder or file does not exist
        console.log("Folder or file not found/already deleted:", error.message);
      } else {
        console.error("Error deleting folder:", error);
      }
    }
  };

  function handleDeleteClick(e) {
      e.stopPropagation();
      console.log(pageId);
      deleteDoc(doc(db, `diaries/${currentUserID}/pages`, pageId));
      deleteImagesFolder(`images/${currentUserID}/${title}`);
  }

  return (
    <div
      className={`card justify-content-center ${
        isSelected ? "bg-info" : "bg-dark-subtle"
      }`}
      style={{ height: "65px" }}
      onClick={() => onClick()}
    >
      <div className="row g-0">
        <div className="col-md-2">
          <img src={img} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-10 d-flex align-items-center">
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between align-items-center">
            <h5 className="fw-semibold">{title}</h5>
            <button className="delete-button" onClick={handleDeleteClick}><i className="fa fa-trash-can"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
