import { navigationItems } from "../../data/navigationData";
import { Link } from "react-router-dom";
import { useState } from "react";

const renderLink = (path, label, onClick) => {
    if (path && path.startsWith("/")) {
        return <Link to={path} onClick={onClick}>{label}</Link>;
    }
    return <a href={path || "#"} onClick={onClick}>{label}</a>;
};

export function NavigationSection({ isOpen = false, onClose, onToggle }) {
    const [openItems, setOpenItems] = useState({});

    const formatLabel = (key, label) => {
        if (label && label.trim()) return label;
        return key
            .toLowerCase()
            .split("_")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const toggleItem = (key) => {
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleLinkClick = () => {
        if (onClose) onClose();
    };

    const handlePanelClose = () => {
        if (onClose) {
            onClose();
            return;
        }
        if (onToggle) onToggle();
    };

    return (
        <>
            <section
                className={`navigation-section ${isOpen ? "is-open" : ""}`.trim()}
                id="mobile-navigation"
            >
                <div className="navigation-bar">
                    <button
                        className={`nav-toggle ${isOpen ? "is-open" : ""}`.trim()}
                        type="button"
                        onClick={onToggle}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                    >
                        <span className="nav-toggle-bar"></span>
                        <span className="nav-toggle-bar"></span>
                        <span className="nav-toggle-bar"></span>
                    </button>
                </div>
                <div className="navigation-panel">
                    <div className="navigation-panel-header">
                        <button
                            className="nav-panel-close"
                            type="button"
                            onClick={handlePanelClose}
                            aria-label="Close navigation panel"
                        >
                            ×
                        </button>
                    </div>
                    <div className="navigation-inner">
                        <ul className="navigation-list">
                            {navigationItems.map((item, index) => {
                                const [key, value] = Object.entries(item)[0];
                                const label = formatLabel(key, value.label);
                                const path = value.path || "#";
                                const children = Array.isArray(value.children) ? value.children.filter(child => child.label) : [];
                                const isItemOpen = !!openItems[key];
                                const hasChildren = children.length > 0;

                                return (
                                    <li
                                        key={`${key}-${index}`}
                                        className={`navigation-item ${isItemOpen ? "is-open" : ""}`.trim()}
                                    >
                                        <div className="navigation-link-row">
                                            {renderLink(path, label, handleLinkClick)}
                                            {hasChildren && (
                                                <button
                                                    className="nav-submenu-toggle"
                                                    type="button"
                                                    aria-label={`Toggle ${label} submenu`}
                                                    aria-expanded={isItemOpen}
                                                    onClick={() => toggleItem(key)}
                                                >
                                                    <span className="nav-arrow" aria-hidden="true"></span>
                                                </button>
                                            )}
                                        </div>
                                        {hasChildren && (
                                            <div className="navigation-dropdown">
                                                <ul>
                                                    {children.map((child, childIndex) => (
                                                        <li key={`${key}-child-${childIndex}`}>
                                                            {renderLink(child.path, child.label, handleLinkClick)}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
