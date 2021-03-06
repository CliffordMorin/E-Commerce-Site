import { useRouter } from "next/router";
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const router = useRouter();
  return (
    user && (
      <Wrapper>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          {orders.map((order) => (
            <Order key={order.id}>
              <h1>
                Order Number: <span>{order.id}</span>
              </h1>
              <h2>
                Amount: <span>{formatMoney(order.amount)}</span>
              </h2>
              <h2>
                Receipt Email: <span> {user.email}</span>
              </h2>
            </Order>
          ))}
        </div>
        <button onClick={() => router.push("/api/auth/logout")}>Logout</button>
      </Wrapper>
    )
  );
}

const Order = styled.div`
  background: white;
  margin: 2rem 0rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 1rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1rem;
    color: var(--secondary);
  }
  span {
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 50%;
    color: white;
    margin: 2rem;
    cursor: pointer;
  }
`;
