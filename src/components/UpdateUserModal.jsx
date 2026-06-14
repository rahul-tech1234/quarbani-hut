"use client";

import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
export function UpdateUserModal() {
  const handkeUpdateUser=async(e)=>{
      e.preventDefault();
      const name=e.target.name.value;
      const image=e.target.image.value;
      await authClient.updateUser({
        name:name,
        image:image
      });
  }
  return (
    <Modal>
      <Button variant="secondary"><BiEdit></BiEdit> Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <BiUser></BiUser>
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={handkeUpdateUser}>
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text" variant="secondary">
                    <Label>Image</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                    <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

