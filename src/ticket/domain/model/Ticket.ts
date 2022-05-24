import { randomUUID } from 'crypto';

export class Ticket {
  private id: string;
  description: string;
  status: TicketStatus;
  createAt: Date;
  updateAt: Date;
  priority: number;
  constructor(description: string, priority: number) {
    this.id = randomUUID();
    this.description = description;
    this.status = TicketStatus.OPEN;
    this.createAt = new Date();
    this.updateAt = new Date();
    this.priority = priority;
  }

  isClosed(): boolean {
    return this.status === TicketStatus.CLOSED;
  }
}

enum TicketStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}
