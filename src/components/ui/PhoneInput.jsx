import { Flag } from "lucide-react";
import { forwardRef, useState } from "react";
import CountryCodeSelect from "../ui/CountryCodeSelect";

const PhoneInput = forwardRef(({ label, required, error, ...rest }, ref) => {
  const [countryCode, setCountryCode] = useState("+62");
  return (
    <div className=" flex flex-col gap-1.5">
      <label className=" text-body-sm font-semibold text-text-dark-primary ">
        {label} {required && <span className=" text-error-default ">*</span>}
      </label>

      <div className="flex gap-2">
        <CountryCodeSelect value={countryCode} onChange={setCountryCode} />

        <input
          ref={ref}
          type="tel"
          inputMode="numeric"
          placeholder="812xxxxxxx"
          className={
            'flex-1 min-w-0 px-4 rounded-lg border border-grey-300 text-body-md text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-primary-300 ${error ? " border-error-default" : " border-grey-300"} '
          }
          {...rest}
        />
      </div>

      {error && <p className=" text-body-sm text-error-default">{error}</p>}
    </div>
  );
});

PhoneInput.displayName = "PhoneInput";
export default PhoneInput;
