import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

function Auth() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="text-center text-xl">
        Welcome back !
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-center text-muted-foreground">
          Login to access your profile and connect with others.
        </p>
        <Button className="block w-full" variant="outline">Log in</Button>
        <Button className="w-full mt-2" variant="outline">Sign up</Button>

      </CardContent>
    </Card>
  )
}

export default Auth
