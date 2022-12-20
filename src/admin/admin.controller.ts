import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateItemDto } from './dto/create-user.dto';
import { AdminService } from './admin.service'; 
import { User } from './Interfaces/admin.interface';

@Controller('admin')
export class AdminController {

    constructor(private readonly usersService: AdminService){}

    @Get()
    async findAll() : Promise<User[]>{
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id) : Promise<User>{
        return this.usersService.  findOne(id);
    }

    @Post()
    async create( @Body() createItemDto: CreateItemDto): Promise<User>{
        return this.usersService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id) : Promise<User>{
        return this.usersService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id) : Promise<User>{
        return this.usersService.update(id, updateItemDto);
    }
}
