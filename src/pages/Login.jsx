import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoginContext } from "@/contexts/LoginContext"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { handleLogin} = useContext(LoginContext);
    const navegador = useNavigate();

    useEffect(()=>{
        const storageUser = localStorage.getItem('@UserName:user');

        if(storageUser){
            navegador('/dashboard');
        }
    })

  return (
    <main className="p-8 flex justify-center items-center bg-black">

    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Entre com sua conta</CardTitle>
        <CardDescription>
          Entre com o Email da sua conta
        </CardDescription>
        <CardAction>
          <Button variant="link">Criar Conta</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Esqueceu sua Senha? 
                </a>
              </div>
              <Input 
              id="password" 
              type="password" 
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)} 
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-400"
        onClick={(e)=> handleLogin(email, password, e)}
        >
          Login
        </Button>
      </CardFooter>
    </Card>
    </main>
  )
}
