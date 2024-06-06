import CardMarket from "./CardMarket";

export default {
  title: "components/card/CardMarket",
  component: CardMarket,
  args: {
    title: "LEMON",
    price: "3.99",
    src: "https://imgs.search.brave.com/KvRbeOV1rNMuTIuYNIUq9FfalNWeyUVHa-S-R2DSF9I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy85MTU0Mjkt/bG92ZWx5LWxlbW9u/cy5qcGc",
    type: "dark",
    size: "medium"
},
};
const Template = (args)=> <CardMarket {...args} />

export const Primary = Template.bind({})


