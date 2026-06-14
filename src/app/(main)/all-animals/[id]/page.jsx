import { data } from "@/apicall";
import CustersInfo from "@/components/CustersInfo";
import { ArrowLeft } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
const SinglePageDetails = async ({params}) => {
    const AllData= await data();
    const {id}=await params
    //console.log(id ,'params')
    const singleData=AllData.find(data=>data.id==id);
    //console.log(singleData.name);
    return (
      <div className="card bg-base-100  shadow-sm my-3">
         <div className="flex sm:flex-col md:flex-row justify-between items-center gap-5">
          <div className="card-body relative bg-gray-100 rounded shadow py-5">
            
          <figure className="w-100">
    <Image src={singleData.image} alt={singleData.name} height={100} width={100} className="w-full" 
    ></Image>
  </figure>
    <div className="">
        <h2 className="card-title text-gray-700 text-4xl font-bold my-2">
      {singleData.name}
      <div className="">
        <div className="badge badge-secondary absolute top-3 right-3">{singleData.category}</div>
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
   <p>{singleData.weight}Kg</p>
   <p>{singleData.age} Year</p>
   <p>{singleData.location}</p>
    </div>
    </div>
    <div className="flex gap-4">
        <Button><Link href={'/all-animals'} className="flex items-center justify-center gap-3"><ArrowLeft></ArrowLeft> Back</Link></Button>
        <Button href={'/'} className={'bg-linear-to-r from-purple-400 to-yellow-400 text-bla'}>Buy Now</Button>
    </div>
        </div>
        <div>
          <CustersInfo></CustersInfo>
        </div>
         </div>
 
</div>
    );
};

export default SinglePageDetails;