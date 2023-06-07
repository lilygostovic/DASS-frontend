import { type Case, type Gender, type Keyword, type Status } from "./model";

const getCaseByID = async (id: number): Promise<Case> => {
  const res = await fetch(`/api/cases?id=${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  const json = await res.json();

  // eslint-disable-next-line prefer-destructuring
  const caseByID = json[0];

  return caseByID as Case;
};

type Field =
  | "id"
  | "timestamp"
  | "gender"
  | "status"
  | "body"
  | "country"
  | "keywords";

interface GetCasesProps {
  minId?: number;
  maxId?: number;
  gender?: Gender;
  status?: Status;
  country?: string; // todo:: tighter typing here
  keywords?: Keyword[];
  fields?: Field[];
}

export const getCases = async ({
  minId,
  maxId,
  gender,
  status,
  country,
  keywords,
  fields,
}: GetCasesProps): Promise<Case[]> => {
  const filters: string[] = [];

  if (minId !== undefined) {
    filters.push(`min_id=${minId}`);
  }
  if (maxId !== undefined) {
    filters.push(`max_id=${maxId}`);
  }
  if (gender !== undefined) {
    filters.push(`gender=${gender}`);
  }
  if (status !== undefined) {
    filters.push(`status=${status}`);
  }
  if (country !== undefined) {
    filters.push(`country=${country}`);
  }
  if (keywords !== undefined) {
    const keywordNames = keywords.map((keyword) => keyword.name);

    filters.push(`keywords=${keywordNames.toString()}`);
  }
  if (fields !== undefined) {
    filters.push(`fields=${fields.toString()}`);
  }

  const res = await fetch(`/api/cases?${filters.join("&")}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  const cases = await res.json();

  return cases as Case[];
};

export const casesService = {
  getCaseByID,
  getCases,
};
