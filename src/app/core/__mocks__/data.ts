
import { Post, Strip } from '../model';
import * as faker from 'faker';

export function stripFactory(): Strip {
    return {
        cases: {}
    };
}
export function postFactory(): Post {
    return {
        uuid: faker.random.uuid(),
        title: faker.hacker.phrase(),
        createdAt: faker.date.recent(),
        content: faker.lorem.paragraph(Math.random() * 15),
    };
}
export const posts: Post[] = [
    postFactory(),
    postFactory(),
    postFactory(),
    postFactory(),
    postFactory(),
];
