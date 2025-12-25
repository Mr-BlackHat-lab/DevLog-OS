interface ErrorMessageProps {
    message: string;
    title?: string;
    onRetry?: () => void;
}

export default function ErrorMessage({
    message,
    title = "Error",
    onRetry
}: ErrorMessageProps) {
    return (
        <div className="error-message">
            <h3 className="error-title">{title}</h3>
            <p className="error-text">{message}</p>
            {onRetry && (
                <button onClick={onRetry} className="retry-button">
                    Try Again
                </button>
            )}
        </div>
    );
}
