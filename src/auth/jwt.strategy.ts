import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { UserService } from "src/user/user.service";
import { User } from "src/user/user.entity";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "key",
          });
      
    }

    validate(payload: any) : any{
        return payload;
    }
}