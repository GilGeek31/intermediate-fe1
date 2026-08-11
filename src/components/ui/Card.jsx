export default function Card({ children, className="" }) {
    return (
        <div className={`w-full overflow-hidden bg-white rounded-2x1 shadow-sm p-8 max-w-xl ${className}`}>
            {children}
        </div>
    )
}