export const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>

      <div>
        <label htmlFor="job-location">Job Location</label>
        <select id="job-location">
          <option value="">Select a country</option>
          <option value="US">United State</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="IN">India</option>
          <option value="AU">AUstralia</option>
        </select>
      </div>

      <div>
        <label>
          <input type="checkbox" id="terms" />I agrre to the terms and
          conditions
        </label>
      </div>

      <button>Submit</button>
    </form>
  );
};
