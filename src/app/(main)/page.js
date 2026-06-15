import Banner from "@/components/shared/Banner";
import Feature from "@/components/Featured ";
import Tips from "@/components/Tips";
export default function Home() {
    return (
        <div className="space-y-6">
            <Banner></Banner>
            <Feature></Feature>
            <Tips></Tips>
        </div>
    );
}
