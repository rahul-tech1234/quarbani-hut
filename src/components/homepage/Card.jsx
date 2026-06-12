import {Button, Card, CloseButton} from "@heroui/react";
import Image from "next/image";
const CardPage = ({singleData}) => {
    console.log(singleData);
    return (
        <div className="grid-cols-3 gap-5">
              <Card className="w-full items-stretch">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
        <img
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          width={100}
          height={100}
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-2xl font-bold">{singleData.name}</Card.Title>
          <Card.Description>
            {singleData.Description}
          </Card.Description>
          <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
        </Card.Header>
        <Card.Footer className=" ">
          <div className="flex justify-end items-center gap-40 space-y-3">
            <div className="space-y-3">
                <div className="text-sm font-medium  text-green-500">Live Weight</div>
                <div className="text-sm font-bold text-green-500">Age </div>
            </div>
            <div className="space-y-3">
                <div className="text-sm font-medium text-green-500">{singleData.weight}</div>
                <div className="text-sm font-medium text-green-500">{singleData.age}</div>
            </div>
          </div>
            <div className="btn">Button</div>
          
        </Card.Footer>
      </div>
    </Card>
        </div>
    );
};

export default CardPage;