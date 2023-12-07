import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ResponseObject } from '../response/responseObject';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<User>;
    getUserByID(user_id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    update(info: User, user_id: string): Promise<ResponseObject>;
    delete(user_id: string): Promise<ResponseObject>;
}
