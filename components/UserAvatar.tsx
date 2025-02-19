"use client";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserAvatar() {
  const { data: session } = useSession(); // Fetches session dynamically

  return (
      <Avatar className="bg-black" >
      <AvatarImage src={session?.user?.image || "/default-avatar.png"} />
      <AvatarFallback>{session?.user?.name?.charAt(0) || "?"}</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;