'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
    const Nablink = ({href , children}) => {
        const pathname=usePathname();
        const isActive=pathname === href;
    return (
        <div>
            <Link 
            href={href} 
            onClick={()=>setIsActive(!isActive)} 
            className={`${isActive && 'animate__animated animate__bounce'}`}>{children}</Link>
        </div>
    );
};

export default Nablink;