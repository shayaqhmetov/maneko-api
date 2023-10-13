import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import {
    CreateUserDto,
    UpdateUserDto,
} from './dto/';
import { User } from './user.model';
import { UserService } from './user.service';
const USERS = require("../../fixtures/users.json");

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() user: User): Promise<User> {
        return await this.userService.create(user);
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.userService.findById(id);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: User): Promise<User> {
        return await this.userService.update(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return await this.userService.delete(id);
    }
}
