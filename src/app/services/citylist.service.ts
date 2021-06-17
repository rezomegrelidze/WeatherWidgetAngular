import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CityListService {

   constructor(private http: HttpClient) {

    }

    public getJSON(): Observable<any> {
        return this.http.get("../../assets/city.list.json");
    }
}