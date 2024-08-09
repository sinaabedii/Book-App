import { IoSearchSharp } from "react-icons/io5";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, seacrhHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
      />
      <button onClick={seacrhHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchBox;
