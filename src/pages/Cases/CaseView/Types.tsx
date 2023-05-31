import { type Gender, type Status } from "../../../services/casesService/model";

export interface Filters {
  motive?: string;
  country?: string;
  gender?: Gender;
  status?: Status;
  // minAge?: number | string; // todo:: change to number only
  // maxAge?: number | string; // todo:: change to number only
}
