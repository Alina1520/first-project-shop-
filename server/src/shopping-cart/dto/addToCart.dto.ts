import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AddToCart{
    @ApiProperty({example:'Vlad'})
    @IsNotEmpty()
    username:string;

    @ApiProperty({example:1})
    userId?:number;
    
    @ApiProperty({example:1})
    @IsNotEmpty()
    partId:number;
}