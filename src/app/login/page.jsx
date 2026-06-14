"use client";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button,  FieldError, InputGroup, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
const LogInPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleSignIn=async(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        const { data, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(data,error);
if (data) {
    toast.success('Log in successfull');
    return 
}
if (error) {
    //console.log(error)
    toast.error(error.message);
}
    }
    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
        provider: "google",
  });
};
    return (
        <div className="flex flex-col items-center justify-center h-[100vh]"> 
          <div className="rounded-xl  p-9 shadow-xl bg-gray-200">
            <h2 className="text-center text-4xl my-3 font-semibold text-gray-600" >Sign In</h2>
              <Form className="flex w-96 flex-col gap-4" onSubmit={handleSignIn}>
      {/* email */}
       <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
{/* password */}
 <TextField className="w-full" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full"
          type={isVisible ? "text" : "password"}
           />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
    <div className='text-center space-y-3'>
      Or
      <Link href={'/signup'} className="block text-center text-blue-500 font-light">Don&apos;t have an account </Link>
    <Button 
    className="w-full text-xl"              
    
    onClick={handleGoogle}><FaGoogle></FaGoogle> Sign In with Google</Button>
    </div>
    
          </div>
        </div>
    );
};

export default LogInPage;