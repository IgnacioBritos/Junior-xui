
import Badge from "./Badge";
 export default {
    title:"components/Badge",
    component:Badge,
    args:{
        name:"Argentina",
        src:"https://i.pravatar.cc/150?u=a042581f4e29026024d",
        color:"dark",
        content: "5",
        placement:"top-right"
    }
 }

 const Template =( arg)=> <Badge {...arg} />

 export const Primary = Template.bind({})