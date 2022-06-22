import { useEffect } from "react";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";

export default function ProductDetails() {
  //Use StateContext to get the qty
  const {
    qty,
    setQty,
    increaseQty,
    decreaseQty,
    showCart,
    cartItems,
    setShowCart,
    setCartItems,
    addToCart,
  } = useStateContext();

  //Reset qty counter for each product on page load
  const resetQuantity = () => {
    setQty(1);
  };
  useEffect(() => {
    resetQuantity();
  }, []);

  //Fetch Slug from the url
  const { query } = useRouter();

  //Fetch GraphQL data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: {
      slug: query.slug,
    },
  });
  const { data, error, fetching } = results;

  //check for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  //Extract Data from the GraphQL data
  const { title, description, price, image, slug } =
    data.products.data[0].attributes;
  console.log(data.products.data[0].attributes);

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.small.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy onClick={() => addToCart(data.products.data[0].attributes, qty)}>
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
