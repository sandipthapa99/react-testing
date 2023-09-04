export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>

      <p>All fields are mandatory</p>

      <span title="close">X</span>

      <img src="https://via.placeholder.com/150" alt="this is alt text" />

      <div data-testid="custom-element">Custom HTML element</div>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value={"Sandip"}
            onChange={() => {}}
          />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
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
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};
