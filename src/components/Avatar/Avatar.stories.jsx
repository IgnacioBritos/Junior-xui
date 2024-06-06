import Avatar from "./Avatar";

export default {
  title: "components/Avatar",
  component: Avatar,
  args: {
    name: "Argentina",
    src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"
   
  },
};

const Template = (args) => <Avatar {...args} />;


export const Primary = Template.bind({});
