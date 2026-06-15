'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
    const Nablink = ({href , children}) => {
        const pathname=usePathname();
        const isActive=pathname === href;
    return (
        <div>
            <Link 
            href={href}  
            className={` ${isActive
          ? "border-b-2 border-gray-500 text-purple-500 animate__animated animate__bounce pb-2"
          : ""
        }`}>{children}</Link>
        </div>
    );
};

export default Nablink;