import { Ticket } from '../model/Ticket';

export interface TicketRepository {
  create(ticket: Ticket): Ticket;
  findAll(): Ticket[];
}

export const TicketRepository = Symbol('TicketRepository');
