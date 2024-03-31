import { useSelector, useDispatch } from "react-redux";

import style from "./SearchBox.module.css";
import { filterContact } from "../../redux/filtersSlice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filter.name);

  const handleFilter = (e) => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div className={style.search}>
      <label className={style.label} htmlFor="number">
        Find contacts by name
      </label>
      <input
        onChange={handleFilter}
        value={selectNameFilter}
        className={style.input}
        type="text"
      />
    </div>
  );
}
