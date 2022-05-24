# Driven / Secondary / Output Adapter

An adapter to implement the driven/outbound port, It could be used to implement a database, a queue, a messaging system, etc.

i.e.
- `TicketInMemory` implement the outbound port
- It would be injected into the `TicketService` which is the implementation of the inbound port and the core business logic.
  - The injection itself is handled by nestjs in ticket.module.ts


