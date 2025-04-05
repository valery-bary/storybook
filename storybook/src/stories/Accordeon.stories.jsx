import Accordeon from "../components/ui/Accordion/Accordeon.jsx";
import "../App.css";

export default {
  title: "Components/Accordeon",
  component: Accordeon,
  tags: ['autodocs'],
};
 
export const Primary = {
  args: {
    data: ['one', 'two', 'three'],
    setSelectedGoal: () => console.log('setSelectedGoal'),
    label: 'Accordeon',
    primary: true,
  },
};