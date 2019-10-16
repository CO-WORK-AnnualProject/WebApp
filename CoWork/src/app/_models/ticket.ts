
export interface Ticket {
    _id: string;
    objet: string;
    description: string;
    equipment: string;
    status: string;
    id_open_space: string;
    equipement: string;
  }

export interface TicketRegister {
  objet: string;
  description: string;
  equipment: string;
  status: string;
  id_open_space: string;
  equipement: string;
}
