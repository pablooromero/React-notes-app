import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteNote,
  startSaveNote,
  startUploading,
} from "../../actions/notes";

export const NotesAppBar = ({ date, id }) => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const noteDate = moment(date);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  const handleDelete = () => {
    dispatch(startDeleteNote(active.id));
  };

  return (
    <div className="notes__appbar">
      <span>{noteDate.format("MMM Do")}</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn btn__appbar" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn btn__appbar-save" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
