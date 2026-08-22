import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputField = forwardRef(
  ({ label, required, type = "text", error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="flex flex-col gap-1.5">
        <label className="text-body-sm md:text-body-md font-normal text-text-dark-primary">
          {label} {required && <span className="text-error-default">*</span>}
        </label>

        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            className={`w-full py-3 px-4 rounded-lg border text-text-dark-primary 
                        text-body-sm font-normal md:text-body-md transition-colors duration-150 focus:outline-none focus:ring-2
                         focus:ring-primary-300
                         ${error ? "border-error-default" : "border-gray-200"}`}
            {...rest}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-dark-disabled hover:text-grey-700"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          )}
        </div>
        {error && (
          <span className="text-error-default text-body-sm">{error}</span>
        )}
      </div>
    );
  },
);

InputField.displayName = "InputField";
export default InputField;
