import { Ticket } from '../model/Ticket';

/**
 * Interface for Ticket Repository, outbound port
 */
export interface ITicketRepository {
  create(ticket: Ticket): Ticket;
  findAll(): Ticket[];
}

export const ITicketRepository = Symbol('ITicketRepository');
