import { AppDataSource } from '../_helpers/db';
import { User } from '../entities/User';
import { Repository } from 'typeorm';

export class UserService {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async create(userData: Partial<User>): Promise<void> {
        const user = this.userRepository.create(userData);
        await this.userRepository.save(user);
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async getById(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
    }

    async update(id: number, userData: Partial<User>): Promise<void> {
        await this.userRepository.update(id, userData);
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}