
import Input from "./Input";

export default {
    title: "components/Input",
    Component: Input,
    args:{
        type:"email",
        placeholder: "Enter your email",
        colors:"primary",
        size:"md",
        radius:"md",
        theme:"black"
    }
}
const Template = (args)=> <Input {...args} />

export const Primary = Template.bind({})
