import { useRouter } from "next/router";
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";
import formatTimeStamp from "../lib/formatTimeStamp";
import { Wrapper, Order, LogoutBtnWrapper } from "../styles/ProfileStyles";
import { motion } from "framer-motion";

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
        <h2 className="userName">{user.name}</h2>
        <p className="userEmail">{user.email}</p>
        <div>
          {orders.map((order) => (
            <Order key={order.id}>
              <h1>
                Date Ordered: <span>{formatTimeStamp(order.created)}</span>
              </h1>
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
        <LogoutBtnWrapper>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => router.push("/api/auth/logout")}
          >
            Logout
          </motion.button>
        </LogoutBtnWrapper>
      </Wrapper>
    )
  );
}
