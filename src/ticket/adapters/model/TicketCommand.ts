import { IsNotEmpty } from 'class-validator';

/**
 * TicketCommand
 * Used for CUD ticket
 */
export class TicketCommand {
  @IsNotEmpty()
  description: string;
  priority: number;
}
