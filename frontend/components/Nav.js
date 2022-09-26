import Link from "next/link";
import { useState } from "react";
import { FiShoppingBag, FiSun } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill, BsCloudyFill } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { AiOutlineClose } from "react-icons/ai";
import {
  NavStyles,
  NavItems,
  SwitchStyles,
  ToastBtn,
} from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0";
import Switch from "react-switch";
import toast from "react-hot-toast";

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav({ theme, setTheme }) {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();
  const [checked, setChecked] = useState(false);

  const changeThemeHandler = () => {
    setChecked(!checked);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toastInfo = () => {
    toast(
      (t) => (
        <div>
          <p className="toast__text">
            Use the credit card 4242 4242 4242 4242 for testing when buying
            products.
          </p>
          <ToastBtn
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="toast__button"
            onClick={() => toast.dismiss(t.id)}
          >
            <AiOutlineClose />
          </ToastBtn>
        </div>
      ),
      {
        position: "top-center",
        style: {
          color: "var(--primary)",
          background: "var(--card-background)",
        },
        icon: "👋",
        duration: 4000,
      }
    );
  };

  return (
    <NavStyles>
      <Link href={"/"}>uShop.</Link>
      <NavItems>
        <User />
        <div
          onClick={() => {
            toastInfo();
            setShowCart(true);
          }}
        >
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
        <Switch
          onChange={changeThemeHandler}
          checked={checked}
          checkedHandleIcon={<BsMoonStarsFill className="moonIcon" />}
          uncheckedHandleIcon={<FaSun className="sunIcon" />}
          checkedIcon={<WiStars className="starsIcon" />}
          uncheckedIcon={<BsCloudyFill className="cloudyIcon" />}
          offColor={"#73BDBB"}
          onColor={"#4D46BF"}
          offHandleColor={"#D8B55E"}
          onHandleColor={"#908BDA"}
          height={40}
          width={70}
          handleDiameter={30}
          boxShadow={"0px 1px 8px #fff"}
        />
        <h3>{`${theme.toUpperCase()} MODE`}</h3>
      </SwitchStyles>
    </NavStyles>
  );
}
