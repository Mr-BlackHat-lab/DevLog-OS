interface EmptyStateProps {
    title: string;
    description: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    icon?: React.ReactNode;
}

export default function EmptyState({
    title,
    description,
    action,
    icon,
}: EmptyStateProps) {
    return (
        <div className="empty-state">
            {icon && <div className="empty-state-icon">{icon}</div>}
            <h3 className="empty-state-title">{title}</h3>
            <p className="empty-state-description">{description}</p>
            {action && (
                <button onClick={action.onClick} className="empty-state-action">
                    {action.label}
                </button>
            )}
        </div>
    );
}
