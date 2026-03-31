import React from 'react';

/**
 * A component that renders a link that opens in a new browser tab/window.
 * Useful for launching external pages or content.
 *
 * @param {Object} props
 * @param {string} props.url - The URL to open
 * @param {string} props.label - The text to display for the link
 * @param {string} props.className - Optional CSS classes for styling
 * @returns {JSX.Element} A link element that opens in a new tab
 */
const ExternalLink = ({ url, label, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

export default ExternalLink;