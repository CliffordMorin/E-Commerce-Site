import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";
import { motion } from "framer-motion";

export default function User() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const formatInitials = (name) => {
    const initials = name.match(/\b\w/g) || [];
    return (
      ((initials.shift() || "") + (initials.pop() || "")).toUpperCase() || ""
    );
  };

  if (!user) {
    return (
      <Profile
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push("/api/auth/login")}
      >
        <FaUserCircle size={30} />
        <h3>Profile</h3>
      </Profile>
    );
  }
  return (
    <Profile onClick={() => router.push("/profile")}>
      <img src={user.picture} alt={user.name} />
      <h3>{formatInitials(user.name)}</h3>
    </Profile>
  );
}

const Profile = styled(motion.div)`
  img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 768px) {
    margin-right: 16rem;
  }
`;
