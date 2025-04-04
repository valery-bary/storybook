import LanguageChanger from "../components/language-changer/LanguageChanger.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";

export default {
  title: "Components/LanguageChanger",
  component: LanguageChanger,
  tags: ['autodocs'],
};
 
export const Primary = {
  args: {
    label: 'LanguageChanger',
    primary: true,
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Story />}/>
        </Routes>
      </BrowserRouter>
    ),
  ]
};