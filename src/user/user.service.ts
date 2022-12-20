import { Injectable } from "@nestjs/common"
import { User } from "./user.entity"

@Injectable()
export class UserService{
    public users : User[] = [
        {
            username: "u1",
            password: "p1"
        },
        {
            username: "u2",
            password: "p2"
        },
        {
            username: "u3",
            password: "p3"
        },
        {
            username: "u4",
            password: "p4"
        }
    ];

    getUserByUserName(userName : string) : User{
        return this.users.find((user:User)=>user.username === userName);
    }
}