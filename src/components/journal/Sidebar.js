import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { JournalEntries } from "./JournalEntries";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <span className="journal__sidebar-name"> {name}</span>

        <button className="btn btn__sidebar" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
