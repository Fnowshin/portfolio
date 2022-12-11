import { createBrowserRouter } from "react-router-dom" ;
import AboutMe from "../AboutMe/AboutMe";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import ProjectsDetail from "../ProjectsDetail/ProjectsDetail";
import Project1 from "../ProjectsInfo/Project1";
import Project2 from "../ProjectsInfo/Project2";
import Project3 from "../ProjectsInfo/Project3";
import Project4 from "../ProjectsInfo/Project4";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
           {
            path: '/project',
            element: <ProjectsDetail></ProjectsDetail>
           },
           {
            path: '/project1',
            element: <Project1></Project1>
           },
           {
            path: '/project2',
            element: <Project2></Project2>
           },
           {
            path: '/project3',
            element: <Project3></Project3>
           },
           {
            path: '/project4',
            element: <Project4></Project4>
           },
           {
            path: '/aboutme',
            element: <AboutMe></AboutMe>
           }
        ]
    }
])

export default router;