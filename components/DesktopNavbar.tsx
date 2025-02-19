"use client"
import { ModeToggle } from "./ModeToggle";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import UserAvatar from "./UserAvatar";
import { signIn, signOut, useSession } from "next-auth/react";


function DesktopNavbar() {
    const { data: session } = useSession();
    const user = session?.user;

    return (
        <div className="hidden md:flex items-center space-x-4">
            <Button onClick={() => signIn("github")}>
                Github
            </Button>
            <Button onClick={() => signOut()}>
                Sign out
            </Button>
            <ModeToggle />
            <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href="/">
                    <HomeIcon className="w-4 h-4" />
                    <span className="hidden lg:inline">Home</span>
                </Link>
            </Button>
            {user ? (
                <>
                    <Button variant="ghost" className="flex items-center gap-2" asChild>
                        <Link href="/notifications">
                            <BellIcon className="w-4 h-4" />
                            <span className="hidden lg:inline">Notifications</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2" asChild>
                        <Link href={`/profile/${user.name}`}>
                            <UserIcon className="w-4 h-4" />
                            <span className="hidden lg:inline">Profile</span>
                        </Link>
                    </Button>
                    <UserAvatar />
                </>
            ) : (
                <Button>
                    Sign in
                </Button>
            )}
        </div>
    )
}

export default DesktopNavbar