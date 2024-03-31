// import { useEffect, useState } from "react";
import ContactForm from "./componets/ContactForm/ContactForm";
import ContactList from "./componets/ContactList/ContactList";
import SearchBox from "./componets/SearchBox/SearchBox";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.phonebook}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
