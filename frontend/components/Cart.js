import { useStateContext } from "../lib/context.js";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Checkout,
  Cards,
  ExitOut,
  CheckoutBtn,
} from "../styles/CartStyles.js";
import { Quantity } from "../styles/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import getStripe from "../lib/getStripe.js";

//Animation variants for the cart
const card = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

const cards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

export default function Cart() {
  const { cartItems, setShowCart, addToCart, removeFromCart, totalPrice } =
    useStateContext();

  //Payment Stripe
  const handleCheckout = async () => {
    const stripePromise = await getStripe();
    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await res.json();
    console.log(data);
    await stripePromise.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        animate={{
          x: "0%",
        }}
        initial={{
          x: "50%",
        }}
        exit={{
          x: "50%",
        }}
        transition={{
          type: "spring",
          duration: 0.5,
          ease: "easeInOut",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <ExitOut
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.85 }}
          onClick={() => setShowCart(false)}
        >
          <IoClose />
        </ExitOut>
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              ease: "easeInOut",
            }}
          >
            <h1>Cart Empty</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        <Cards layout variants={cards} initial="hidden" animate="show">
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <Card layoutId={item.slug} variants={card} key={item.slug}>
                  <img
                    src={item.image.data.attributes.formats.thumbnail.url}
                    alt={item.title}
                  />
                  <CardInfo>
                    <h3>{item.title}</h3>
                    <h3>${item.price}</h3>
                    <Quantity>
                      <span>Quantity</span>
                      <button>
                        <AiFillMinusCircle
                          onClick={() => removeFromCart(item)}
                        />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item, 1)}>
                        <AiFillPlusCircle />
                      </button>
                    </Quantity>
                  </CardInfo>
                </Card>
              );
            })}
        </Cards>
        {cartItems.length >= 1 && (
          <Checkout layout>
            <h3>Subtotal: ${totalPrice.toFixed(2)}</h3>
            <CheckoutBtn
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCheckout}
            >
              Purchase
            </CheckoutBtn>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
