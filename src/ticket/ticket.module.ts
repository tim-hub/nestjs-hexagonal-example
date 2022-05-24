import { Logger, Module } from '@nestjs/common';
import { TicketController } from './adapters/api/TicketController';
import { TicketService } from './domain/ports/TicketService';
import { TicketApiService } from './adapters/api/TicketAPIService';
import { TicketRepository } from './domain/ports/TicketRepository';
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
