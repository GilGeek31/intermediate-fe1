import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

const SelectField = forwardRef(
  ({ label, required, error, options = [], placeholder, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="text-body-sm md:text-body-md font-normal text-text-dark-primary">
          {label} {required && <span className="text-error-default">*</span>}
        </label>

        <div className="relative">
          <select
            ref={ref}
            className={`w-full appearance-none px-4 py-3 rounded-lg border text-body-sm font-normal md:text-body-md text-text-dark-primary bg-white
            focus:outline-none focus:ring-2 focus:ring-primary-300
            ${error ? "border-error-default" : "border-grey-200"}`}
            {...rest}
          >
            <option value="" disabled hidden>
              {placeholder || "Pilih salah satu"}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-grey-400 pointer-events-none"
          />
        </div>

        {error && <p className="text-body-sm text-error-default">{error}</p>}
      </div>
    );
  },
);

SelectField.displayName = "SelectField";
export default SelectField;
