import {
  AgeInput,
  Container,
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

import { useTranslation } from "react-i18next";

interface FormProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: unknown) => void;
}

export const Form = ({ register, handleSubmit, onSubmit }: FormProps) => {
  const { t } = useTranslation();
  const formTitle = t("filterPage.form.title");
  const allOption = t("filterPage.allOption");

  const acceptedLabel = t("filterPage.accepted.label");
  const acceptedOption = t("filterPage.accepted.accepted");
  const rejectedOption = t("filterPage.accepted.rejected");
  const unknownOption = t("filterPage.accepted.unknown");

  const motiveLabel = t("filterPage.motive.label");

  const countryLabel = t("filterPage.country.label");
  const afghanistanOption = t("filterPage.country.afghanistan");
  const iranOption = t("filterPage.country.iran");
  const syrienOption = t("filterPage.country.syrien");

  const genderLabel = t("filterPage.gender.label");
  const femaleOption = t("filterPage.gender.female");
  const maleOption = t("filterPage.gender.male");
  const unknownGenderOption = t("filterPage.gender.unknown");

  const ageLabel = t("filterPage.ageFilter.label");
  const minAgePlaceholder = t("filterPage.ageFilter.minPlaceholder");
  const maxAgePlaceholder = t("filterPage.ageFilter.maxPlaceholder");

  return (
    <Container>
      <Title>{formTitle}</Title>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormRow>
          <FormInput>
            <Label>{acceptedLabel}</Label>
            <Select {...register("accepted")}>
              <option value={allOption}>{allOption}</option>
              <option value={acceptedOption}>{acceptedOption}</option>
              <option value={rejectedOption}>{rejectedOption}</option>
              <option value={unknownOption}>{unknownOption}</option>
            </Select>
          </FormInput>
          <FormInput>
            <Label>{motiveLabel}</Label>
            <Select {...register("motive")} placeholder="Motive">
              <option value={allOption}>{allOption}</option>
            </Select>
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput>
            <Label>{countryLabel}</Label>
            <Select {...register("country")}>
              {/* REMEMBER THIS MUST BE ALL ****DANISH**** COUNTRY NAMES AS VALUES so it hits the backend proper */}
              <option value={allOption}>{allOption}</option>
              <option value={afghanistanOption}>{afghanistanOption}</option>
              <option value={iranOption}>{iranOption}</option>
              <option value={syrienOption}>{syrienOption}</option>
            </Select>
          </FormInput>
          <FormInput>
            <Label>{genderLabel}</Label>
            <Select {...register("gender")} placeholder="Gender">
              <option value={allOption}>{allOption}</option>
              <option value={femaleOption}>{femaleOption}</option>
              <option value={maleOption}>{maleOption}</option>
              <option value={unknownGenderOption}>{unknownGenderOption}</option>
            </Select>
          </FormInput>
        </FormRow>
        <FormInput>
          <Label>{ageLabel}</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <AgeInput
              {...register("minAge", { min: 0, max: 99 })}
              type="number"
              placeholder={minAgePlaceholder}
            />
            <AgeInput
              {...register("maxAge", { min: 0, max: 99 })}
              type="number"
              placeholder={maxAgePlaceholder}
              style={{ marginLeft: "10px" }}
            />
          </div>
        </FormInput>
        <Submit type="submit" />
      </form>
    </Container>
  );
};
