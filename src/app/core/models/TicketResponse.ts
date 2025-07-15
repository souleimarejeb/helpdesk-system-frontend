export class TicketResponse {
    ticketId!: string
    title!: string;
    type!: string;
    priority!: string;
    description!: string;
    status!: 'Pending' | 'InProgress' | 'Solved' | 'Rejected' | 'Closed';
    createdAt!: Date;
    updatedAt!: Date;
    category!: string;
    user!: string
}