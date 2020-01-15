import React from "react";
import { action } from "@storybook/addon-actions";
import Component from "./component";

export default {
  title: "Component",
  component: Component
};

export const Default = () => <Component />;
