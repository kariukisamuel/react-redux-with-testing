import React from "react";
import { render } from "@testing-library/react";
import CourseForm from "./CourseForm";

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it('labels save buttons as "Save" when not saving', () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it('labels save buttons as "Saving..." when not saving', () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
