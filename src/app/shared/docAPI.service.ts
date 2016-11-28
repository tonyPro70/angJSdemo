import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Jsonp} from '@angular/http';
//import { JSONPConnection} from '@angular/http'
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService{
    /*success: boolean;
    deck_id: string;
    shuffeled: boolean;
    remaining: number;*/
 /* Started with the employee tutorial sent by Michael. While initially successful, I am unable to get data to render on screen.
 Ultimatley I ran out of time trying to get a dynamic pull form teh server. The combination of lack of API documentation, resource and intimate knowledge of AngJS2 gave way to a rabbit hole of readings and beta tutorials that ultimately rendered errors when served. As you can see the cross browser JSONP was as far as I had gotten. Opting to turn attentions to the layout.
    */
    //private url: string = "apidata/employee.json"
    //private url: string = "http://jsonplaceholder.typicode.com/get"
   //private url: string = "https://deckofcardsapi.com/api/deck/"
   //private url: string = "https://deckofcardsapi.com/api/deck/new"
   //private url: string ="https://deckofcardsapi.com/api" 
    //private url: string = "https://deckofcardsapi.com/api/deck/new/shuffle/"
    private url: string = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

  // private url: string = "https://deckofcardsapi.com/api/deck/new/draw/?count=2"

    //constructor(private _http: Http){}
    constructor(private _jsonp: Jsonp){}
    getEmployees(){

        //return this._http.get(this.url) 
        return this._jsonp.get(this.url) 
            .map((response: Response) => response.json())
            //replacing datafeed with http call to server via Get (HTTP) it request and sends a response via Observables
            //{"id": 1, "name": "Andrew", "gender": "Male" },
            //.catch(this._errorHandler);  
           
    }

    _errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server Sucks");

    }
}