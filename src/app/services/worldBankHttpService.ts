import {Injectable} from "@angular/core";
import {Http, Response, Jsonp} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class WorldBankService{
    constructor(private jsonp:Jsonp){}

    private url = "http://api.worldbank.org/countries/us/indicators/SH.XPD.PRIV.ZS?date=2000:2002&format=jsonP&prefix=JSONP_CALLBACK";

    getTestData(): Observable<any[]>{
        return this.jsonp.get(this.url)
        .map(function(res: Response){
            let body = res.json();
            console.log(body);
            return body.data || {};
        }).catch(function(error: any){return Observable.throw(error);
        });
    }
}
