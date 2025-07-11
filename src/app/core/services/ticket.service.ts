import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TicketRequest } from "../models/TicketRequest";

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    private baseUrl = "http://localhost:8081/Helpdesk/api/v1/ticket"

    constructor(private http: HttpClient) { }

    // get all tickets 
    getTicket(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    //getTicket By Id 

    // create ticket 
    createTicket(payload: TicketRequest, id: string) {
        return this.http.post(`${this.baseUrl}/${id}`, payload);
    }

    getAllByUserId(id: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }



} 