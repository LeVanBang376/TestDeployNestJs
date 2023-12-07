"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const responseObject_1 = require("../response/responseObject");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async signUp(authCredentialsDto) {
        const { email, password, name, avatar } = authCredentialsDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = this.usersRepository.create({
            email,
            password: hashedPassword,
            name,
            avatar,
            role: 1,
            created_at: new Date(),
            updated_at: new Date(),
        });
        try {
            await this.usersRepository.save(user);
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Username already exists');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async signIn(authCredentialsDto) {
        const { email, password } = authCredentialsDto;
        const user = await this.usersRepository.findOne({
            where: {
                email,
            },
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { email };
            const accessToken = this.jwtService.sign(payload);
            return user;
        }
        else {
            throw new common_1.UnauthorizedException('Please check your login credentials');
        }
    }
    async getUserByID(user_id) {
        const user = await this.usersRepository.findOne({
            where: {
                id: user_id,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${user_id} not found`);
        }
        return user;
    }
    async getAllUsers() {
        const allUsers = await this.usersRepository.find();
        if (!allUsers)
            throw new common_1.NotFoundException(`Users not found`);
        return allUsers;
    }
    async update(info, user_id) {
        const user = await this.usersRepository.findOne({
            where: {
                id: user_id,
            },
        });
        if (!user) {
            return new responseObject_1.ResponseObject(404, `User with id ${user_id} not found`, {});
        }
        const newUser = await this.usersRepository.update({ id: user_id }, {
            avatar: info.avatar,
            name: info.name,
        });
        return new responseObject_1.ResponseObject(200, 'Update user successfully', newUser);
    }
    async delete(user_id) {
        const user = await this.usersRepository.findOne({
            where: {
                id: user_id,
            },
        });
        console.log('user');
        if (!user) {
            return new responseObject_1.ResponseObject(404, `User with id ${user_id} not found`, {});
        }
        await this.usersRepository.delete({ id: user_id });
        return new responseObject_1.ResponseObject(200, 'Delete user successfully', {});
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map