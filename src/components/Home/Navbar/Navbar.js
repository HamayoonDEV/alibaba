import { useState } from "react";
import styles from "./Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useDispatch } from "react-redux";
import { setText } from "../../../store/userSclice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [text, seText] = useState();
  const handleInput = async () => {
    const data = {
      text,
    };
    dispatch(setText(data));
  };
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <ShoppingCartIcon />
      </div>
      <div className={styles.search}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={(e) => seText(e.target.value)}
        />
        <button onClick={handleInput} className={styles.button}>
          Search
        </button>
      </div>
      <div className={styles.right}>
        <FavoriteBorderIcon />
        <AddShoppingCartIcon />
        <PersonAddAltIcon />
      </div>
    </div>
  );
};

export default Navbar;
