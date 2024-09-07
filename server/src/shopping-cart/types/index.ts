import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
// {





//     "image": "https://loremflickr.com/640/480/technics?lock=3344356706615296?random=485535098002284435525943129299",
//     "name": "Desparatus cattus.",
//     "total_price": 5059,
//     "id": 4,
//     "createdAt": "2023-10-22T20:22:52.550Z",
//     "updatedAt": "2023-10-22T20:22:52.550Z",
//     "count": 0
// }

class ShopCart{
   @ApiProperty({example:4})
   userId: number;

   @ApiProperty({example:5059})
   total_price:number;

   @ApiProperty({ example: 1 })
   id: number;
 
   @ApiProperty({ example: faker.lorem.sentence(2) })
   boiler_manufacturer: string;
 
   @ApiProperty({ example: 12345 })
   price: string;
 
   @ApiProperty({ example: faker.lorem.sentence(2) })
   parts_manufacturer: string;
 
   @ApiProperty({ example: faker.internet.password() })
   vendor_code: string;
 
   @ApiProperty({example:faker.image.urlPicsumPhotos()})
   image:string;

   @ApiProperty({example:6})
   in_stock:number;

   @ApiProperty({example:0})
   count:number;

   @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
   createdAt: string;
 
   @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
   updatedAt: string;

}

export class AddToCartRequest{
    @ApiProperty({example:"Vlad"})
    username:string;
    @ApiProperty({example:2})
    partId:number;
}
export class UpdateCountRequest{
    @ApiProperty({example:1})
    count:number;
}
export class UpdateCountResponse{
    @ApiProperty({example:1})
    count:number;
}
export class UpdateTPriceRequest{
    @ApiProperty({example:1000})
    total_price:number;
}
export class UpdateTPriceResponse{
    @ApiProperty({example:1})
    total_price:number;
}

export class AddToCartResponse extends ShopCart{}
export class GetIdResponse extends ShopCart{}