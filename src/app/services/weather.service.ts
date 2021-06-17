import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class WeatherService{

    private apiKey = "1890fcd579ac51bb12f42af3ceed6428";
    private unitsOfMeasure = "metric"; // imperial and standard also an option
    
    constructor(private http: HttpClient) {

    }

    public getJSON(cityId: number): Observable<any> {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${this.unitsOfMeasure}&appid=${this.apiKey}`);
    }

    public getIconUrl(iconId: string): string {
        return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    }
}