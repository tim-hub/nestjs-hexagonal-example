import { Logger, Module } from '@nestjs/common';
import { TicketController } from './adapters/api/TicketController';
import { TicketService } from './domain/inboudPorts/TicketService';
import { TicketApiService } from './adapters/api/TicketAPIService';
import { TicketRepository } from './domain/outboundPorts/TicketRepository';
import { TicketInMemory } from './adapters/db/TicketInMemory';

@Module({
  imports: [Logger],
  controllers: [TicketController],
  providers: [
    TicketService,
    TicketApiService,
    {
      provide: TicketRepository,
      useClass: TicketInMemory, // can add condition on ENV, inject mock impl for unit testing
    },
  ],
})
export class TicketModule {}
