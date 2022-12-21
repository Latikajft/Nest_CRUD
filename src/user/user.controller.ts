import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Response, Res } from "@nestjs/common";
import { UserEntity, UserService } from "./user.service";

@Controller('userr')
export class UserController{
    constructor(private userService: UserService){

    }

    @Get()
    async findAll() {
     const response = await this.userService.findAll();
     return response;
    //  response.status(HttpStatus.OK).json({payload: response});
    }
    
    @Get(":id")
    async findOne(@Param() id: number) {
     const response = await this.userService.findOne(id);
     return response;
    //  response.status(HttpStatus.OK).json({payload: response});
    }

    @Post()
    async create(@Body() createUserDto: UserEntity){
        const response = await this.userService.create(createUserDto);
        return response;
    }

    @Post(":id")
    async update(@Param() id: number, @Body() createUserDto: UserEntity){
        const response = await this.userService.update(id, createUserDto);
        return response;
    }

    @Delete(":id")
    async delete(@Param('id') id: number){
        const response = await this.userService.remove(id);
        return response;
    }
}