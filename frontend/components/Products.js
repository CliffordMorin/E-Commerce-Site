import { ProductStyle } from "../styles/ProductStyle";

export default function Products({ product }) {
  //extract the product data from the props
  const { title, price, description, image } = product.attributes;
  return (
    <ProductStyle>
      <div>
        <img src={image.data.attributes.formats.small.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyle>
  );
}
