import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { TicketService } from '../../domain/ports/TicketService';

import { TicketCommand } from './TicketCommand';

@Controller('tickets')
export class TicketController {
  private readonly logger = new Logger(TicketController.name);

  constructor(private ticketService: TicketService) {}

  @Get()
  findAll(): any[] {
    return this.ticketService.findAll();
  }

  @Post()
  create(@Body() ticketCommand: TicketCommand): any {
    const ticker = this.ticketService.create(
      ticketCommand.description,
      ticketCommand.priority,
    );
    this.logger.debug(ticketCommand);
    this.logger.debug({ ticker });
    return { ...ticker };
  }
}
