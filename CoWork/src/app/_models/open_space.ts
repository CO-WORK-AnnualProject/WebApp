  export interface Meeting {
    _id: string;
    name: string;
  }

  export interface Call {
    _id: string;
    name: string;
  }

  export interface Rooms {
    meeting: Meeting[];
    call: Call[];
  }

  export interface Laptop {
    _id: string;
    name: string;
  }

  export interface Printer {
    _id: string;
    name: string;
  }

  export interface Equipments {
    laptop: Laptop[];
    printer: Printer[];
  }

  export interface Lundi {
    start_time: string;
    end_time: string;
  }

  export interface Mardi {
    start_time: string;
    end_time: string;
  }

  export interface Mercredi {
    start_time: string;
    end_time: string;
  }

  export interface Jeudi {
    start_time: string;
    end_time: string;
  }

  export interface Vendredi {
    start_time: string;
    end_time: string;
  }

  export interface Samedi {
    start_time: string;
    end_time: string;
  }

  export interface Dimanche {
    start_time: string;
    end_time: string;
  }

  export interface Schedule {
    Lundi: Lundi;
    Mardi: Mardi;
    Mercredi: Mercredi;
    Jeudi: Jeudi;
    Vendredi: Vendredi;
    Samedi: Samedi;
    Dimanche: Dimanche;
  }

  export interface OpenSpace {
    _id: string;
    name: string;
    options: string[];
    rooms: Rooms;
    equipments: Equipments;
    schedule: Schedule;
  }
