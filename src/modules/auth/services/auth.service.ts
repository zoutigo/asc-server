import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async validateUser(details: CreateUserDto) {
    console.log('AUTH SERVICE');
    console.log(details);
    const user = await this.userRepository.findOneBy({
      email: details.email,
    });

    if (user) return user;

    const newUser = this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }

  async findUser(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }
}
