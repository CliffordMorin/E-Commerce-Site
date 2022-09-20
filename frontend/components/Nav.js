import Link from "next/link";
import { useState } from "react";
import { FiShoppingBag, FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { NavStyles, NavItems, SwitchStyles } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0";
import ReactSwitch from "react-switch";

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav({ theme, setTheme }) {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();
  const [checked, setChecked] = useState(false);

  const changeThemeHandler = () => {
    setChecked(!checked);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <NavStyles>
      <Link href={"/"}>uShop.</Link>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
      <SwitchStyles>
        <ReactSwitch
          onChange={changeThemeHandler}
          checked={checked}
          uncheckedIcon={BsMoonStarsFill}
          checkedIcon={FiSun}
        />
      </SwitchStyles>
    </NavStyles>
  );
}
