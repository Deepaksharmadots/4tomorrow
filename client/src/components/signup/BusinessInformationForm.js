"use client";

import AuthorizationCheckbox from "./AuthorizationCheckbox";
import FormField from "./FormField";

const INDUSTRIES = [
  "M6923 — Management advice services",
  "M6910 — Legal services",
  "E3221 — Waste treatment and disposal services",
  "C1211 — Soft drink manufacturing",
];

const YEAR_ENDS = ["30 June", "31 March", "31 December", "30 September"];

const CURRENCIES = [
  "AUD – Australian Dollar",
  "USD – US Dollar",
  "NZD – New Zealand Dollar",
  "GBP – British Pound",
  "EUR – Euro",
];

export default function BusinessInformationForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="signup-form signup-business" onSubmit={handleSubmit} noValidate>
      <FormField
        id="business-name"
        label="Business name *"
        hint="What your team calls your business. The legal entity name is collected before your first report."
      >
        <input
          id="business-name"
          name="businessName"
          type="text"
          autoComplete="organization"
          placeholder="Enter your business name"
          defaultValue="Meridian Building Products"
          autoFocus
        />
      </FormField>

      <FormField
        id="industry"
        label="Industry"
        hint="Drives which emission factors 4tomorrow uses and which categories apply to you."
      >
        <select id="industry" name="industry" defaultValue={INDUSTRIES[0]}>
          {INDUSTRIES.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        id="financial-year-end"
        label="Financial year end"
        hint="Set this once. Important: Everything is reported against it."
      >
        <select id="financial-year-end" name="financialYearEnd" defaultValue="30 June">
          {YEAR_ENDS.map((yearEnd) => (
            <option key={yearEnd} value={yearEnd}>
              {yearEnd}
            </option>
          ))}
        </select>
      </FormField>

      <FormField id="reporting-currency" label="Reporting currency">
        <select id="reporting-currency" name="currency" defaultValue={CURRENCIES[0]}>
          {CURRENCIES.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </FormField>

      <AuthorizationCheckbox />

      <button type="submit">Create my account</button>
    </form>
  );
}
