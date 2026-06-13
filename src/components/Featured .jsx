import { data } from "@/apicall";
import Card from "@/components/homepage/Card";
const FeaturedPage  = async() => {
    const getData=await data();
    //console.log(getData);
    const slcie=getData.slice(0,4);
    //console.log(slcie);
    return (
            
        <div className="grid md:grid-cols-4 gap-5 my-5">
            {
                slcie.map(singleData=><Card key={singleData.id} singleData={singleData}></Card>)
            }
        </div>
    );
};

export default FeaturedPage ;