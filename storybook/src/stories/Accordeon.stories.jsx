import Accordeon from "../components/ui/Accordion/Accordeon.jsx";

export default {
  title: "Components/Accordeon",
  component: Accordeon,
  tags: ['autodocs'],
};
 
export const Primary = {
  
  args: {
    label: 'Accordeon',
    primary: true,
    data: ['one', 'two', 'three'],
    setSelectedGoal: (newId) => newId,
    multiplyChoice: false,
  },
};