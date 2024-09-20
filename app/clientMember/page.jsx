"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Nav from "../(components)/Nav";
import AdminDashboard from "../(components)/AdminDashboard";
import UserDashboard from "../(components)/UserDashboard";
import CompanyDashboard from "../(components)/CompanyDashboard";
import { signIn } from "next-auth/react";

const Member = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/clientMember");
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>; // loading state
  }

  // access the role
  const userRole = session?.user?.role;

  const handleConnectTwitter = () => {
    signIn("twitter"); // This will redirect to Twitter for authentication
  };

  return (
    <div className="min-h-screen w-screen">
      <Nav />
      <button onClick={handleConnectTwitter}>Connect Twitter</button>
      {/* Render the appropriate dashboard based on the user role */}
      {userRole === "admin" && <AdminDashboard />}
      {userRole === "company" && <CompanyDashboard />}
      {userRole === "user" && <UserDashboard />}
    </div>
  );
};

export default Member;
