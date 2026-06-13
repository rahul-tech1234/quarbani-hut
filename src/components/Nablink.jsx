import Link from "next/link";
    const Nablink = ({href , children}) => {
        
    return (
        <div>
            <Link href={href}>{children}</Link>
        </div>
    );
};

export default Nablink;