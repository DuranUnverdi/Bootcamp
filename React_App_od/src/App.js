import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import UserCard from "./components/UserCard";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import BlogPage from "./components/BlogPage";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import NotFound from "./components/NotFound";

export const headerLinks = [
  {
    id: 1,
    title: "Ana Sayfa",
    link: "/",
  },
  {
    id: 2,
    title: "Yazılar",
    link: "/blog",
  },
  {
    id: 3,
    title: "Projeler",
    link: "/projects",
  },
  {
    id: 4,
    title: "Hakkımda",
    link: "/about",
  },
];

function App() {
  return (
    <div>
      <Header links={headerLinks} />
      <main>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFound} />
        </Switch>

        <UserCard />
      </main>
    </div>
  );
}

export default App;
