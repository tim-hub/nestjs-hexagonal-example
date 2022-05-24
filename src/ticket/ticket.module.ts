import { Logger, Module } from '@nestjs/common';
import { TicketController } from './adapters/driving/TicketController';
import { TicketService } from './domain/inboudPorts/TicketService';
import { ITicketRepository } from './domain/outboundPorts/ITicketRepository';
import { TicketInMemory } from './adapters/driven/TicketInMemory';

@Module({
  imports: [Logger],
  controllers: [TicketController],
  providers: [
    TicketService,
    {
      provide: ITicketRepository,
      useClass: TicketInMemory, // can add condition on ENV, inject mock impl for unit testing
    },
  ],
})
export class TicketModule {}
