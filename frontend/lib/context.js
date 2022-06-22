import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our data for the state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Increase product quantity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease product quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty > 1) {
        return prevQty - 1;
      }
      return prevQty;
    });
  };

  //Add product to cart
  const addToCart = (product, quantity) => {
    //Increase total price
    setTotalPrice((prevTotal) => {
      return prevTotal + product.price * quantity;
    });

    //Increase total quantities
    setTotalQuantities((prevTotal) => prevTotal + quantity);

    //check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    //If the product is already in the cart, increase the quantity and don't add it again
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      //If the product is not in the cart, keep all of the items previously in the cart and add the new one
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove product from cart
  const removeFromCart = (product) => {
    //Decrease total price
    setTotalPrice((prevTotal) => {
      return prevTotal - product.price;
    });

    //Decrease total quantities
    setTotalQuantities((prevTotal) => prevTotal - 1);

    //check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        setQty,
        increaseQty,
        decreaseQty,
        showCart,
        cartItems,
        setShowCart,
        setCartItems,
        addToCart,
        removeFromCart,
        totalQuantities,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
