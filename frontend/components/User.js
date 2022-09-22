import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";

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
      <Profile onClick={() => router.push("/api/auth/login")}>
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

const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 768px) {
    margin-right: 16rem;
  }
`;
