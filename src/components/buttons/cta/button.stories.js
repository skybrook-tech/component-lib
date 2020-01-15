import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export default {
  title: "buttons/Button",
  component: Button
};

export const Default = () => (
  <Button onClick={action("click")}>Cta button</Button>
);
