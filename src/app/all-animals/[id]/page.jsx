import { data } from "@/apicall";
import { Button } from "@heroui/react";
const SinglePageDetails = async ({params}) => {
    const AllData= await data();
    const {id}=await params
    //console.log(id ,'params')
    const singleData=AllData.find(data=>data.id==id);
    console.log(singleData.name);
    return (
      <div className="card bg-base-100 shadow-sm my-3">
  <figure>
    {/* <Image src={singleData.image} alt={singleData.name}></Image> */}
  </figure>
  <div className="card-body relative">
    <div className="">
        <h2 className="card-title text-gray-700 text-4xl font-bold my-2">
      {singleData.name}
      <div className="">
        <div className="badge badge-secondary absolute top-0 right-0">{singleData.category}</div>
      </div>
    </h2>
    <p className="text-xl">{singleData.description}</p>
    </div>
    <div className="flex items-center justify-start gap-5">
      <div className="space-y-2">
   <p>Breed :</p>
   <p>Price :</p>
   <p>Weight :</p>
   <p>Age :</p>
   <p>Location :</p>
    </div>
      <div className="font-bold space-y-2">
   <p>{singleData.breed}</p>
   <p>{singleData.price} Tk</p>
   <p>{singleData.weight}</p>
   <p>{singleData.age} Year</p>
   <p>{singleData.location}</p>
    </div>
    </div>
    <div className="flex gap-4">
        <Button href={'/'} >Buy Now</Button>
        <Button href={'/'} className={'bg-linear-to-r from-purple-400 to-yellow-400 text-bla'}>Buy Now</Button>
    </div>
  </div>
</div>
    );
};

export default SinglePageDetails;