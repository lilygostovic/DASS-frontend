import {
  AgeInput,
  FormInput,
  FormRow,
  Label,
  Select,
  Submit,
  Title,
} from "./StyledComponents";
import {
  type FieldValues,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from "react-hook-form";

import { Container } from "../components/Helper";

interface FormProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: unknown) => void;
}

export const Form = ({ register, handleSubmit, onSubmit }: FormProps) => (
  <Container>
    <Title>Filter For Specific Cases</Title>
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FormRow>
        <FormInput>
          <Label>Accepted/Rejected</Label>
          <Select {...register("accepted")}>
            <option value="All">All</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </Select>
        </FormInput>
        <FormInput>
          <Label>Motive</Label>
          <Select {...register("motive")} placeholder="Motive">
            <option value="All">All</option>
          </Select>
        </FormInput>
      </FormRow>
      <FormRow>
        <FormInput>
          <Label>Country of Origin</Label>
          <Select {...register("country")}>
            <option value="All">All</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Iran">Iran</option>
            <option value="Syria">Syria</option>
          </Select>
        </FormInput>
        <FormInput>
          <Label>Sex</Label>
          <Select {...register("sex")} placeholder="Sex">
            <option value="All">All</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Indeterminable">Indeterminable</option>
          </Select>
        </FormInput>
      </FormRow>
      <FormInput>
        <Label>Age</Label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <AgeInput
            {...register("minAge", { min: 0, max: 99 })}
            type="number"
            placeholder="Min"
          />
          <AgeInput
            {...register("maxAge", { min: 0, max: 99 })}
            type="number"
            placeholder="Max"
            style={{ marginLeft: "10px" }}
          />
        </div>
      </FormInput>
      <Submit type="submit" />
    </form>
  </Container>
);
