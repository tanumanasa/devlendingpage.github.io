import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css"
function Testimonials() {
  return (
    <section className="testimonials">
      <h1 class="imagine">
        Imagine...
        <br /> an inclusive future with Vichayan
      </h1>
      <div className="testimonials-content">
        <TestimonialCard profilePic="./images/student_1.png" studentName="STUDENT NAME" schoolName="School Name" review="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"/>
        <TestimonialCard profilePic="./images/student_1.png" studentName="STUDENT NAME" schoolName="School Name" review="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"/>
        <TestimonialCard profilePic="./images/student_1.png" studentName="STUDENT NAME" schoolName="School Name" review="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"/>
      </div>
    </section>
  );
}

export default Testimonials;
