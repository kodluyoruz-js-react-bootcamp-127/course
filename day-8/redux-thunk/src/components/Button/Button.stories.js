import React from "react";

import Button from "./Button";

export default {
  title: "Kodluyoruz/Button",
  component: Button,
  args: {
    text: "Login",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
      defaultValue: "primary",
    },
    loading: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

export const Primary = (args) => <Button {...args} variant="primary" />;
export const Secondary = (args) => <Button {...args} variant="secondary" />;
