import {
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

import { countries } from "../../../common";
import i18n from "src/i18n/config";
import { motives } from "src/common/motives";
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

  const genderLabel = t("filterPage.gender.label");
  const femaleOption = t("filterPage.gender.female");
  const maleOption = t("filterPage.gender.male");
  const unknownGenderOption = t("filterPage.gender.unknown");

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
              <option value="">{allOption}</option>
              <option value={acceptedOption}>{acceptedOption}</option>
              <option value={rejectedOption}>{rejectedOption}</option>
              <option value={unknownOption}>{unknownOption}</option>
            </Select>
          </FormInput>
          <FormInput>
            <Label>{motiveLabel}</Label>
            {/* todo:: make this a multi select */}
            <Select {...register("motive")} placeholder="Motive">
              <option value="">{allOption}</option>
              {motives.map((motive) => (
                <option key={motive.en} value={motive.dk}>
                  {i18n.language === "en" ? motive.en : motive.dk}
                </option>
              ))}
            </Select>
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput>
            <Label>{countryLabel}</Label>
            {/* todo:: make this a multi select */}
            <Select {...register("country")}>
              <option value="">{allOption}</option>
              {countries.map((country) => (
                <option key={country.short} value={country.dk}>
                  {i18n.language === "en" ? country.en : country.dk}
                </option>
              ))}
            </Select>
          </FormInput>
          <FormInput>
            <Label>{genderLabel}</Label>
            <Select {...register("gender")} placeholder="Gender">
              <option value="">{allOption}</option>
              <option value={femaleOption}>{femaleOption}</option>
              <option value={maleOption}>{maleOption}</option>
              <option value={unknownGenderOption}>{unknownGenderOption}</option>
            </Select>
          </FormInput>
        </FormRow>
        <Submit type="submit" />
      </form>
    </Container>
  );
};
