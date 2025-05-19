import React from "react";

function Form({ handleForm }) {
  return (
    <>
      <h1>Student Registration</h1>
      <div className="main">
        <form onSubmit={handleForm} autoComplete="on">
          <div className="form-group">
            <label htmlFor="name">Student Name :</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number :</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          {/* <div className="form-group">
            <label htmlFor="dob">Date of Birth :</label>
            <input type="date" id="dob" name="dob" required />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender :</label>
            <select id="gender" name="gender" required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <select id="course" name="course" required>
              <option value="">Select a course</option>
              <option value="bsc">B.Sc</option>
              <option value="msc">M.Sc</option>
              <option value="btech">B.Tech</option>
              <option value="mtech">M.Tech</option>
            </select>
          </div> */}

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
          </div>

          <div className="form-group">
            <input type="submit" value="Register" className="registerBtn" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
