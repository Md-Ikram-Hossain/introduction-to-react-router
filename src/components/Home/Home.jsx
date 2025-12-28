import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/footer";



const Home = () => {
    const navigation =useNavigation();
    return (
        <div>
            <Header></Header>
            {
               navigation.state === "loading" ?
               <p>Looading.........</p>:
               <Outlet></Outlet>
            }
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;