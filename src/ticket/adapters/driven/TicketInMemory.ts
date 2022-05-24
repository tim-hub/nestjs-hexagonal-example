import { Injectable } from '@nestjs/common';
import { Ticket } from '../../domain/model/Ticket';
import { ITicketRepository } from '../../domain/outboundPorts/ITicketRepository';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class TicketInMemory implements ITicketRepository {
  private readonly tickets: Ticket[] = [new Ticket('ticket 1', 1)];

  create(ticket: Ticket): Ticket {
    this.tickets.push(ticket);
    return ticket;
  }

  findAll(): Ticket[] {
    return this.tickets;
  }
}
