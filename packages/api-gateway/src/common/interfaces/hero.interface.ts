import { Observable } from "rxjs";

export interface HeroesService {
    findOne(data: { id: number }): Observable<Hero>;
}

export interface Hero {
    id: number;
    name: string;
}