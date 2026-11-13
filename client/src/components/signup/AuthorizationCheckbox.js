export default function AuthorizationCheckbox() {
  return (
    <div className="signup-auth">
      <input
        id="authorised"
        name="authorised"
        type="checkbox"
        className="form-check-input"
        defaultChecked
      />
      <label htmlFor="authorised">
        I&apos;m authorised to provide this organisation&apos;s data
      </label>
    </div>
  );
}
