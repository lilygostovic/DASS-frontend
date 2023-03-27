export interface Filters {
  accepted: string;
  motive: string;
  country: string;
  sex: string;
  minAge?: number | string; // todo:: change to number only
  maxAge?: number | string; // todo:: change to number only
}
