import { IoPerson, IoCall } from "react-icons/io5";

import { deleteContact } from "../../redux/contactsSlice";
import style from "./ContactList.module.css";
import { useDispatch } from "react-redux";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
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
          dispatch(deleteContact(contact.id));
        }}
        className={style.btn}
      >
        Delete X
      </button>
    </li>
  );
}
