import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Button",
    radius: "rd-medium",
    color:"dark",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  type: "Secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: "Tertiary",
};


