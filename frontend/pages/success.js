import { useRouter } from "next/router";
import Image from "next/image";
import orderConfirmation from "../public/orderConfirmation.svg";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";

const { motion } = require("framer-motion");

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

export default function Success({ order }) {
  const router = useRouter();
  console.log(order);
  const address = order.customer_details.address;
  const formatAddress = `${address.line1}, ${address.city}, ${address.state}, ${address.postal_code}`;

  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.75 }}
      >
        <h1>Thank you for your order</h1>

        <p>A confirmation email has been sent to</p>
        <h2>{order.customer_details.email}</h2>
        <InfoWrapper>
          <Address>
            <h1>Shipping Address</h1>
            <p>{formatAddress}</p>
          </Address>

          <OrderInfo>
            <h1>Products</h1>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <h2>{item.description}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {formatMoney(item.price.unit_amount)}</p>
              </div>
            ))}
          </OrderInfo>
        </InfoWrapper>
        <KeepShoppingBtn
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push("/")}
        >
          Continue Shopping
        </KeepShoppingBtn>
        <Image
          responsive
          height={200}
          width={500}
          src={orderConfirmation}
          alt="order confirmed"
        />
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1rem 5rem;
  @media (max-width: 768px) {
    margin: 1rem 1rem;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--card-background);
  border-radius: 2rem;
  padding: 3rem 3rem;
  text-align: center;
  h1 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  h2 {
    color: var(--secondary);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  h3 {
    color: var(--primary);
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
`;

const KeepShoppingBtn = styled(motion.button)`
  background: var(--primary);
  color: var(--card-background);
  font-weight: 500;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 1rem;
`;

const Address = styled.div`
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
`;
const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  div {
    padding-bottom: 1rem;
  }
`;
const InfoWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
