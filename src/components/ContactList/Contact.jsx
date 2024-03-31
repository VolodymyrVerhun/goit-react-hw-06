import { IoPerson, IoCall } from "react-icons/io5";

import style from "./ContactList.module.css";

export default function Contact({ contact, deleteContact }) {
  return (
    <li className={style.item}>
      <div>
        <p className={style.parag}>
          <IoPerson /> {contact.name}
        </p>
        <p className={style.parag}>
          <IoCall /> {contact.number}
        </p>
      </div>
      <button
        onClick={() => {
          deleteContact(contact.id);
        }}
        className={style.btn}
      >
        Delete X
      </button>
    </li>
  );
}
