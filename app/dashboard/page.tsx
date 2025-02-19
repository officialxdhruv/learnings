import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

async function page() {
    const session = await auth();
    return (
        <>
            {JSON.stringify(session)}
            <br />
            <br />
            <form action={async () => {
                "use server"
                await signOut();
            }}>
                <Button type="submit">
                    Sign Out
                </Button>
            </form>
        </>

    )
}

export default page