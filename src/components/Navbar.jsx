"use client"
import {Bars} from '@gravity-ui/icons';
import Nablink from './Nablink';

import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import {Avatar, Button} from "@heroui/react";
const Navbar = () => {
    const handleSignOut=async()=>{
        await authClient.signOut();
    }
    const userData=authClient.useSession();
    const user=userData.data?.user;
   // console.log(user)
    return (
        <div className="flex justify-between items-center gap-5 mt-2 py-5 bg-gray-100 rounded px-2">
            <div className="start flex items-center gap-5 font-bold text-4xl ">
                <div className="md:hidden">
                <Bars className="size-5"></Bars>
            </div>
                <h1 className="bg-linear-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent ">QurbaniHat</h1>
                
            </div>       
            <ul className=" middle flex justify-between items-center gap-5">
                <li><Nablink href={'/'} >Home</Nablink></li>
                <li><Nablink href={'/all-animals'}>All Animals</Nablink></li>
                <li><Nablink href={'/profile'}>My Profile</Nablink></li>
            </ul>       
            <div className="end">
                {
                    !user && 
                        <ul className='flex justify-between items-center gap-2'>
                            <li>
                                <Link href={'/signup'} className="btn bg-linear-to-r from-purple-400 to-yellow-500  text-white" onClick={() => console.log("clicked")}>Sign Up</Link>
                            </li>
                            <li>
                                <Link href={'/login'} className="btn bg-linear-to-r from-purple-400 to-yellow-500  text-white" onClick={() => console.log("clicked")}>Sign In</Link>
                            </li>
                        
                
                
                        </ul>
                }
                {
                    user &&   <div className='flex justify-between items-center gap-1'>
                        <Avatar>
        <Avatar.Image alt={user?.name} src={user?.image} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <Button variant='danger' onClick={handleSignOut}>Sign Out</Button>
                    </div>
      
                }
                
                </div>       
        </div>
    );
};

export default Navbar;


{/* Basic */}
