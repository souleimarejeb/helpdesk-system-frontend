import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TicketRequest } from "../models/TicketRequest";
import { TicketResponse } from "../models/TicketResponse";
import { tick } from "@angular/core/testing";

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


    createTicket(payload: TicketRequest, id: string) {
        return this.http.post(`${this.baseUrl}/${id}`, payload);
    }

    getAllByUserId(id: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }


    updateTicketStatus(ticketId: string, payload: Partial<TicketResponse>, id: string): Observable<TicketResponse> {
        return this.http.patch<TicketResponse>(`${this.baseUrl}/${ticketId}/user/${id}`, payload);
    }



} 