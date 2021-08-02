import React from "react";
import { FC } from "react";

const Sorting: FC = () => {
  return (
    <div className="sorting">
      <label htmlFor="Course">Course prise:</label>
      <select name="course" id="course">
       <option value="Lowtohigh">Low To High</option>
        <option value="hightolow">High To Low</option>
      </select>
    </div>
  );
};

export default Sorting;
