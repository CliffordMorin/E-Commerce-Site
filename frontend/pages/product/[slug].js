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
import toast from "react-hot-toast";
import { DetailSkeletonLoader } from "../../lib/SkeletonLoader.js";

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
  if (fetching) return <DetailSkeletonLoader />;
  if (error) return <p>Error : {error.message}</p>;

  //Extract Data from the GraphQL data
  const { title, description, price, image, slug } =
    data.products.data[0].attributes;

  const notify = () =>
    toast.success(`${title} added to cart`, {
      duration: 1200,
      position: "top-center",
      style: {
        background: "var(--card-background)",
        color: "var(--primary)",
      },
    });

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.small.url} alt={title} />
      <ProductInfo>
        <h2>{title}</h2>
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
        <Buy
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            addToCart(data.products.data[0].attributes, qty);
            notify();
          }}
        >
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
