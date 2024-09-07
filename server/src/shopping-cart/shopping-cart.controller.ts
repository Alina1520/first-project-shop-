import { Controller,Get,Param,UseGuards,Post,Body,Patch,Delete } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import {AuthenticatedGuard} from '../auth/authenticated.guard'
import { AddToCart } from './dto/addToCart.dto';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { GetIdResponse,AddToCartResponse, UpdateCountResponse, UpdateCountRequest, UpdateTPriceResponse, UpdateTPriceRequest } from './types';

@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(private shopCartService:ShoppingCartService){}
    @ApiOkResponse({type:[GetIdResponse]})
    @UseGuards(AuthenticatedGuard)
    @Get(':id')
    getAll(@Param("id") userId:number){
        return  this.shopCartService.findAll(userId)
    }
    
    @ApiOkResponse({type:AddToCartResponse})
    @UseGuards(AuthenticatedGuard)
    @Post('/add')
    addToCart(@Body() addToCartDto:AddToCart){
        return this.shopCartService.add(addToCartDto)
    }
    
    @ApiOkResponse({type:UpdateCountResponse})
    @ApiBody({type:UpdateCountRequest})
    @UseGuards(AuthenticatedGuard)
    @Patch('/count/:id')
    updateCount(@Body() {count}:{count:number},@Param("id") partId:number){
        return this.shopCartService.updatedCount(count,partId)
    }
    @ApiOkResponse({type:UpdateTPriceResponse})
    @ApiBody({type:UpdateTPriceRequest})
    @UseGuards(AuthenticatedGuard)
    @Patch('/total-price/:id')
    updateTotalPrice(@Body() {total_price}:{total_price:number},@Param("id") partId:number){
        return this.shopCartService.updatedTotalPrice(total_price,partId)
    }

    @UseGuards(AuthenticatedGuard)
    @Delete('/one/:id')
    remove(@Param("id") partId:number){
        return this.shopCartService.remove(partId)
    }
    @UseGuards(AuthenticatedGuard)
    @Delete('/all/:id')
    removeAll(@Param("id") userId:number){
        return this.shopCartService.removeAll(userId)
    }


}
