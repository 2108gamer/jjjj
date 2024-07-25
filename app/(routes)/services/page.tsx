import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <Header />
            <Navbar />
            
            <div className="flex items-center justify-center h-screen">
                <br></br>
            <h1 className="text-4xl text-secondary">Revisa tu correo electronico linda ❤️</h1>
            </div>
               
        </>
    );
}

export default ServicesPage;