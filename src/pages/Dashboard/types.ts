// Definition of country object type
export interface Country {
  id: number;
  name: string;
  continent: string;
  last_modified: string;
  total: number;
  lgbt: number;
  status: {
    Accepted: number;
    Rejected: number;
    Unknown: number;
  };
  gender: {
    Male: number;
    Female: number;
    Other: number;
    Unknown: number;
  };
}
