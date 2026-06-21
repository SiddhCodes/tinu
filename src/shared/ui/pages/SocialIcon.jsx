export const SocialIcon = ({ href, label, children, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`transition hover:opacity-70 ${className}`}
    >
      {children}
    </a>
  );
};
