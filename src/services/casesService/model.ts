export enum Gender {
  Female = "Female",
  Male = "Male",
  Other = "Other",
  Unknown = "Unknown",
}

export enum Status {
  Accepted = "Accepted",
  Rejected = "Rejected",
  Unknown = "Unknown",
}

export interface Country {
  name: string; // todo:: tighter typing
}

export interface Keyword {
  name: string; // todo:: tighter typing
  type: string; // todo:: tighter typing
}

export interface Case {
  id: number;
  timestamp: Date | null;
  gender: Gender;
  status: Status;
  body: string;
  country: Country;
  keywords: Keyword[];
}
