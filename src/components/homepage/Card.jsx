import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { Separator } from '@heroui/react';
import Link from 'next/link';
import { BiLocationPlus } from 'react-icons/bi';
import { GiWeight } from 'react-icons/gi';

const CardPage = ({singleData}) => {
    //console.log(singleData);
    return (
       <div>
            <Card className="border rounded-xl">
                <div className='relative w-full aspect-square'>
                    <Image 
                    src={singleData?.image} 
                    className='object-cover rounded-xl' 
                    alt={singleData?.name}
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
                    <p><BiLocationPlus className='text-red-700 inline-block'/> {singleData.location}</p>
                </div>
                <Separator orientation='vertical'></Separator>
                <div className='flex items-center gap-2'>
                    <p className='flex justify-center items-center gap-3'><GiWeight className='text-green-500'/>{singleData.weight}</p>
                </div>
                </div>
                <Link href={`/all-animals/${singleData.id}`}><Button className={'w-full'} variant='outline'>View Details</Button></Link>
            </Card>
        </div>
    );
};

export default CardPage;