import { Fragment } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import DefaultLayout from "./components/Layout";
import { publicRouter} from "./components/router"

function App() {
        return (
               <div>
                <Router>
                        <Routes>
                        {publicRouter.map((router,index)=>{
                                const Page = router.component || DefaultLayout
                                // let Layout = Fragment
                                // if(router.layout) {
                                //         Layout = router.layout
                                // } else if(router.layout === null) {
                                //          Layout = Fragment
                                // }
                                return (
                                        <Route key={index} path={router.path} element={<Page/>}/>
                                )
                        })}
                                
                        </Routes>
                </Router>
               </div>
        )
}

export default App;
