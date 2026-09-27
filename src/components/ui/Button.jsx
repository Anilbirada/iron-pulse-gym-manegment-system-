export default function Button({ children, variant = 'primary', size = 'md', href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-body font-semibold tracking-wide transition-all duration-200 cursor-pointer';

  const variants = {
    primary: 'bg-iron-accent text-white hover:brightness-110 active:scale-[0.97]',
    secondary: 'border-2 border-iron-accent text-iron-accent hover:bg-iron-accent hover:text-white active:scale-[0.97]',
    ghost: 'text-iron-accent hover:underline underline-offset-4',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Notch-corner clip for primary and secondary buttons
  const clip = variant !== 'ghost'
    ? { clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }
    : {};

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} style={clip} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} style={clip} {...props}>
      {children}
    </button>
  );
}
