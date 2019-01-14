import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {

    private usersUrl = 'https://localhost:44378/api/users/';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.usersUrl);
    }

    getById(id: number) {
        return this.http.get(this.usersUrl + id);
    }

    register(user: User) {
        return this.http.post(this.usersUrl + `register`, user);
    }

    update(user: User) {
        return this.http.put(this.usersUrl + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.usersUrl + id);
    }
}