import { ProductStyle, ProductImg } from "../styles/ProductStyle";
import Link from "next/link";

export default function Products({ product }) {
  //extract the product data from the props
  const { title, price, description, image, slug } = product.attributes;
  return (
    <ProductStyle>
      <Link href={`product/${slug}`}>
        <div>
          <ProductImg
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            src={image.data.attributes.formats.small.url}
            alt=""
          />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>${price}</h3>
    </ProductStyle>
  );
}
