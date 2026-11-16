export default function SignupProgress({ current = 1, total = 3 }) {
  const steps = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div
      className="signup-progress"
      role="group"
      aria-label={`Step ${current} of ${total}`}
    >
      <div className="signup-progress-bars">
        {steps.map((step) => (
          <span
            key={step}
            className={step <= current ? "is-active" : undefined}
          />
        ))}
      </div>
      <p className="signup-progress-label">
        Step {current} of {total}
      </p>
    </div>
  );
}
