export default function Button({ children, variant="primary", onClick, disabled, className="", type = "button" }) {
    const baseStyle ="w-full py-3 rounded-lg font-semibold text-body-md transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";


    const variants = {
        primary: "bg-primary-500 hover:bg-primary-600 text-text-button-primary active:bg-primary-700",
        secondary: "bg-primary-100 hover:bg-primary-200 text-primary-500 active:bg-primary-300",
        outline: "border border-gray-200 text-text-dark-primary hover:bg-gray-100 active:bg-gray-200",
    }
    return (
        <button
            type={type} 
            onClick={onClick}
            disabled={disabled} 
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    )
}