export default function FormField({ id, label, hint, children }) {
  return (
    <div className="signup-field">
      <label htmlFor={id}>{label}</label>
      {children}
      {hint ? <p className="signup-hint">{hint}</p> : null}
    </div>
  );
}
