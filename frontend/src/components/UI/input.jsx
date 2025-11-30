export default function Button({ children, variant = "primary", ...rest }) {
  return (
    <button className={`btn-${variant}`} {...rest}>
      {children}
    </button>
  );
}
