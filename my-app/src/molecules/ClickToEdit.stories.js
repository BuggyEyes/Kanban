import React from "react";

import ClickToEdit from "./ClickToEdit";

export default {
  title: "Molcules/ClickToEdit",
  component: ClickToEdit
};

const Template = (args) => <ClickToEdit {...args}>{args.title}</ClickToEdit>;

export const ClickHere = Template.bind({});
ClickHere.args = {
  color: "red",
  title: "Click Here",
  value: "Click Here",
  placeholder: "Enter some value...",
  inputClass: "font-bold"
};
