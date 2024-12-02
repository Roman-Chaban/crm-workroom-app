export interface CountryOption {
  label: string;
  value: string;
}

export type CountryOptions = CountryOption[];

export const countryOptions: CountryOptions = [
  { label: "+38 (UA)", value: "38" },
  { label: "+1 (USA)", value: "1" },
  { label: "+44 (UK)", value: "44" },
  { label: "+91 (India)", value: "91" },
  { label: "+33 (France)", value: "33" },
  { label: "+49 (Germany)", value: "49" },
  { label: "+61 (Australia)", value: "61" },
];
