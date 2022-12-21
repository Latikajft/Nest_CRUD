import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { User } from "./user.entity"
@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username:string;

    @Column()
    password:string;
    
    @Column()
    role: string;
}
@Injectable()
export class UserService{
    public users : User[] = [
        {
            username: "u1",
            password: "p1",
            role: "admin"
        },
        {
            username: "u2",
            password: "p2",
            role: "user"
        },
        {
            username: "u3",
            password: "p3",
            role: "user"
        },
        {
            username: "u4",
            password: "p4",
            role: "admin"  
        }
    ];

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ){}

    findAll(): Promise<UserEntity[]>{
        return this.userRepository.find();
    }

    findOne(id: number): Promise<UserEntity>{
        return this.userRepository.findOneBy({id});
    }

    create(user: UserEntity): Promise<UserEntity>{
        return this.userRepository.save(user);
    }

    async update(id: number, user: UserEntity){
        await this.userRepository.update(id, user);
    }
    async remove(id: number): Promise<void>{
        const cur = await this.userRepository.findOneBy({id});
        await this.userRepository.remove(cur);
    }

    getUserByUserName(userName : string) : User{
        return this.users.find((user:User)=>user.username === userName);
    }  
}

