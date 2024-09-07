import { Injectable } from '@nestjs/common';
import { InjectRepository, } from '@nestjs/typeorm';
import {Repository} from "typeorm"
import { ShopCart } from './entities/shop-cart.entity';
import { UsersService } from 'src/users/users.service';
import { BoilerPartsService } from 'src/boiler-parts/boiler-parts.service';
import { AddToCart } from './dto/addToCart.dto';

@Injectable()
export class ShoppingCartService {
    constructor(@InjectRepository(ShopCart)
    private shoppingCart:Repository<ShopCart>,
    private readonly userService:UsersService,
    private readonly boilerParts:BoilerPartsService ){}

    async findAll(userId:number):Promise<ShopCart[]>{
       return this.shoppingCart.find({where:{userId}})
    }
    async add(addToCartDto:AddToCart){
       const cart = new ShopCart()
       const user = await this.userService.findOne({where:{username:addToCartDto.username}})
       const part = await this.boilerParts.findOne(addToCartDto.partId)

       cart.userId = user.id;
       cart.partId = part.id;
       cart.boiler_manufacturer = part.boiler_manufacturer;
       cart.parts_manufacturer = part.parts_manufacturer;
       cart.vendor_code = part.vendor_code
       cart.price = part.price;
       cart.in_stock = part.in_stock;
       cart.image = JSON.parse(part.images)[0]
       cart.name = part.name;
       cart.total_price = part.price


       return await this.shoppingCart.save(cart)
    }
    async updatedCount(count:number,partId:number):Promise<{count:number}>{
      await this.shoppingCart.update({partId},{count})
      const part = await this.shoppingCart.findOne({where:{partId}})
      return {count:part.count}

    }
    async updatedTotalPrice(total_price:number,partId:number):Promise<{total_price:number}>{
        await this.shoppingCart.update({partId},{total_price})
        const part = await this.shoppingCart.findOne({where:{partId}})
        return {total_price:part.total_price}
      }
      async remove(partId:number):Promise<void>{
           const part = await this.shoppingCart.findOne({where:{partId}})
           this.shoppingCart.remove(part)
      }
      async removeAll(userId:number):Promise<void>{
        const part = await this.shoppingCart.findOne({where:{userId}})
        this.shoppingCart.remove(part)
   }
    
}
