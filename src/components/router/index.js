import DefaultLayout from "../Layout"
import Curr from "../Layout/curr"
import PageTwo from "../page/PageTwo/PageTwo"
import PageOne from "../page/pageOne/PageOne"
import Login from "../Login/SignIn";
// import SignUp from "../Login/CreateAccount";
import Post from "../CreatePost";

const publicRouter = [
    {path: "/pageOne", component: PageOne, layout: Curr},
    {path: "/page/:id", component: PageTwo, layout: Curr},
    {path: "/login", component: Login, layout: Curr},
    // {path: "/signUp", component: SignUp, layout: Curr},
    {path: "/create_post", component: Post, layout: Curr},
    {path: "/", component: DefaultLayout},
    {path: "/:slug", component: DefaultLayout}
]

const prevateRouter = [
      
]

export { publicRouter, prevateRouter }