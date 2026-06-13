import {ArrowDownToSquare, HeartFill} from '@gravity-ui/icons';
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { Separator } from '@heroui/react';
import Link from 'next/link';
const CardPage = ({singleData}) => {
    
    //console.log(singleData);
    return (
       <div>
            <Card className="border rounded-xl">
                <div className='relative w-full aspect-square'>
                    <Image 
                    src={singleData.image} 
                    className='object-cover rounded-xl' 
                    alt={singleData.name}
                    fill 
                    sizes='(max-width: 768px) 100w, (max-width: 1200px) 50vw, 33vw'
                    />
                    <Chip className='absolute right-2 top-2' size='sm'>{singleData.type}</Chip>
                </div>
                <div>
                    <h2 className="font-medium">{singleData.name}</h2>
                </div>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-2'>
                    <p><HeartFill className='text-red-700'/></p>
                    <p>{singleData.wieght}</p>
                </div>
                <Separator orientation='vertical'></Separator>
                <div className='flex items-center gap-2'>
                    <p><ArrowDownToSquare className='text-green-500'/></p>
                    <p>{singleData.age}</p>
                </div>
                </div>
                <Link href={`/all-animals/${singleData.id}`}><Button className={'w-full'} variant='outline'>View</Button></Link>
            </Card>
        </div>
    //     <div className="grid-cols-3 gap-5">
    //           <Card className="w-full items-stretch">
    //   <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
    //     <Image
    //       alt="Cherries"
    //       className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
    //       loading="lazy"
    //       width={100}
    //       height={100}
    //       src={singleData.image}
    //     />
    //   </div>
    //   <div className="flex flex-1 flex-col gap-3">
    //     <Card.Header className="gap-1">
    //       <Card.Title className="pr-8 text-2xl font-bold">{singleData.name}</Card.Title>
    //       <Card.Description>
    //         {singleData.Description}
    //       </Card.Description>
    //       <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
    //     </Card.Header>
    //     <Card.Footer className=" ">
    //       <div className="flex justify-end items-center gap-40 space-y-3">
    //         <div className="space-y-3">
    //             <div className="text-sm font-medium  text-green-500">Live Weight</div>
    //             <div className="text-sm font-bold text-green-500">Age </div>
    //         </div>
    //         <div className="space-y-3">
    //             <div className="text-sm font-medium text-green-500">{singleData.weight}</div>
    //             <div className="text-sm font-medium text-green-500">{singleData.age}</div>
    //         </div>
    //       </div>
    //         <div className="btn">Button</div>
          
    //     </Card.Footer>
    //   </div>
    // </Card>
    //     </div>
    );
};

export default CardPage;