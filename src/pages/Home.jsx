import Banner from "../components/Banner";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer"
import Card from "../components/Card";
import Register from "./Register";
import Stories from "./Stories";

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner />
            <div className="m-10">
                <h1 className="font-extrabold text-4xl text-black text-center py-5">সাম্প্রতিক ইভেন্টস</h1>
                <Card/>
           </div>
            <div className="m-10">
                <h1 className="font-extrabold text-4xl text-black text-center py-20 ">আমাদের  গল্পগুলো</h1>
                <Stories/>
           </div>
        
            <div className="m-10">
                <h1 className="font-extrabold text-4xl text-black text-center py-10 ">
                    রেজিস্টার</h1>
                <Register/>
           </div>
        
         
        </div>
    );
};

export default Home;