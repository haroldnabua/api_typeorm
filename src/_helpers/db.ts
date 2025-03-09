import mysql from 'mysql2/promise';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'node-mysql-crud-api',
    entities: [User],
    synchronize: true, // Set to false in production
    logging: true,
});

AppDataSource.initialize()
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.log('Database connection error:', error));