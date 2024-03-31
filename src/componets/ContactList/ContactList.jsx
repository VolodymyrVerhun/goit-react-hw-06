import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import style from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const selectContacts = useSelector((state) => state.contacts.items);

  const selectNameFilter = useSelector((state) => state.filter.name);

  const getFilteredContacts = () => {
    const normalizedFilter = selectNameFilter.toLowerCase().trim();
    return selectContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const newContact = getFilteredContacts();
  return (
    <div className={style.list_container}>
      <ul className={style.list}>
        {newContact.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={() => dispatch(deleteContact(contact.id))}
          />
        ))}
      </ul>
    </div>
  );
}
