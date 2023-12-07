import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { ResponseObject } from '../response/responseObject';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<User>;
    update(info: User, id: string): Promise<ResponseObject>;
    getUserByID(id: string): Promise<User>;
    delete(id: string): Promise<ResponseObject>;
    getAllUsers(): Promise<User[]>;
}
