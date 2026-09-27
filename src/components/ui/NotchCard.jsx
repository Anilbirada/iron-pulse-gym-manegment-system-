export default function NotchCard({ children, accent = false, className = '', hover = true, ...props }) {
  const clipPath = 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))';

  return (
    <div
      className={`bg-iron-surface relative ${
        hover ? 'transition-all duration-300 hover:translate-y-[-2px]' : ''
      } ${className}`}
      style={{ clipPath }}
      {...props}
    >
      {accent && (
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-iron-accent" />
      )}
      {children}
    </div>
  );
}
