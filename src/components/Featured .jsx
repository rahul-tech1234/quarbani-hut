import Card from "@/components/homepage/Card";
const data=async()=>{
    const res=await fetch('https://quarbani-hut-sigma.vercel.app/data.json');
    const data=await res.json();
    return data;
}
const FeaturedPage  = async() => {
    const getData=await data();
    //console.log(getData);
    return (
            
        <div className="grid  md:grid-cols-3 gap-5 my-5">
            {
                getData.map(singleData=><Card key={singleData.id} singleData={singleData}></Card>)
            }
        </div>
    );
};

export default FeaturedPage ;