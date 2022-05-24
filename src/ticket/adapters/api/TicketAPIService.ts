import { Injectable } from '@nestjs/common';
import { Ticket } from '../../domain/model/Ticket';
import { TicketService } from '../../domain/ports/TicketService';
import { TicketCommand } from './TicketCommand';

@Injectable()
export class TicketApiService {
  constructor(private ticketService: TicketService) {}

  create(tickerCommand: TicketCommand): Ticket {
    return this.ticketService.create(
      tickerCommand.description,
      tickerCommand.priority,
    );
  }

  findAll(): Ticket[] {
    return this.ticketService.findAll();
  }
}
