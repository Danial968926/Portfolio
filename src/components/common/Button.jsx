export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
    const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block text-center';
    const variants = {
        primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg',
        outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-gray-800',
    };

    if (href) {
        return (
            <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
}