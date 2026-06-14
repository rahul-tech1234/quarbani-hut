"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { toast } from "react-toastify";

const CustersInfo = () => {
    const handleCustomersInfo=async(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const image=e.target.image.value;
        const email=e.target.email.value;
        const phone=e.target.phone.value;
        //console.log(name,email,image,phone);
        const { data, error } = await authClient.signUp.email({
                name: name, // required
                email: email, // required
                phone: phone, // required
                image: image,
            });
            if (data) {
                toast.success('Welcome! You have receive a mail in a few moment')
            }
            if (error) {
                toast.error(' Please give the valid data')
            }
    }
    return (
            <div className=" flex flex-col items-center justify-center"> 
                  <div className="rounded-xl  p-9 shadow-xl bg-gray-200">
                    <h2 className="text-center text-4xl my-3 font-semibold text-gray-600">Booking form</h2>
                      <Form className="flex flex-col gap-4" onSubmit={handleCustomersInfo}>
              <TextField
                isRequired
                name="name"
                type="text"
              >
                <Label>Name</Label>
                <Input placeholder="john" />
                <FieldError />
              </TextField>
              {/* Image */}
               <TextField
                isRequired
                name="image"
                type="text"
              >
                <Label>Image URL</Label>
                <Input placeholder="https://example.com/img.png" />
                <FieldError />
              </TextField>
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
        
              <TextField
                isRequired
                Length={11}
                name="phone"
                type="number"
                validate={(value) => {
                  if (value.length !== 11) {
                    return "Number must be at contain 11 characters";
                  }
                  
                  return null;
                }}
              >
                <Label>Mobile No</Label>
                <Input placeholder="Enter your mobile no" />
                <Description>Must be 11 characters</Description>
                <FieldError />
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
                  </div>
                </div>
    );
};

export default CustersInfo;