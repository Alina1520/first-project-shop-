import { Controller ,Get,UseGuards,Query, Param, Body, Post} from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { FindOneResponse, GetBestsellersResponse, GetByNameRequest, GetByNameResponse, GetNewResponse, PaginateAndFilterResponse, SearchRequest, SearchResponse } from './types';

@Controller('boiler-parts')
export class BoilerPartsController {
    constructor(private boilerPartsService:BoilerPartsService){}

    @ApiOkResponse({type:PaginateAndFilterResponse})
    @UseGuards(AuthenticatedGuard)
    @Get()
    async paginatedAndFilter(@Query() query){
       return this.boilerPartsService.paginatedAndFilter(query)
    }
    @ApiOkResponse({type:FindOneResponse})
    @UseGuards(AuthenticatedGuard)
    @Get("find/:id")
    async getOne(@Param('id') id:number){
        return this.boilerPartsService.findOne(id)
    }
    @ApiBody({type:GetByNameRequest})
    @ApiOkResponse({type:GetByNameResponse})
    @UseGuards(AuthenticatedGuard)
    @Post("name")
    async getName(@Body() {name}:{name:string}){
        return this.boilerPartsService.findOneByName(name)
    }
    @ApiOkResponse({type:GetBestsellersResponse})
    @UseGuards(AuthenticatedGuard)
    @Get("bestsellers")
    async getBest(){
        return this.boilerPartsService.bestsellers()
    }
    @ApiOkResponse({type:GetNewResponse})
    @UseGuards(AuthenticatedGuard)
    @Get("new")
    async getNew(){
        return this.boilerPartsService.new()
    }
    
    @ApiOkResponse({type:SearchResponse})
    @ApiBody({type:SearchRequest})
    @UseGuards(AuthenticatedGuard)
    @Post("search")
    async search(@Body() {search}:{search:string}){
       return this.boilerPartsService.searchByString(search)
    }
}
