import React from "react";
import Navbar from "./components/Navbar";
import HeroOne from "./components/HeroOne";
import HeroTwo from "./components/HeroTwo";
import HeroThree from "./components/HeroThree";
import HeroFour from "./components/HeroFour";
import Footer from "./components/footer";
import Greeting from "./components/ReactProps";
import Gallery from "./components/Gallery";
import { UserStatus } from "./components/UserStatus";
import { ColorStatus } from "./components/ColorStatus";
import { MailBox } from "./components/mailBox";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const messages:  string[] = ['New email 1', 'New email 2']
  const noMessages: string[] = [];
  return (
    <>
      <h1>Hello, Manual React and Typescript</h1>
      <div className="application">
        <TodoList/>
      </div>
    </>
  );
};

export default App;