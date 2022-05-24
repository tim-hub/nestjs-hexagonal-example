import { Ticket } from '../model/Ticket';

/**
 * Our domain input port
 */

export interface ITicketService {
  create(description: string, priority: number): Ticket;
  findAll(): Ticket[];
  findActiveTickets(): Ticket[];
}
