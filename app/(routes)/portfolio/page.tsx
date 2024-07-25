import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import Form from "@/components/form";
import Header from "@/components/header";


const PortfolioPage = () => {

    return (
        
        <>
        <Header />
         <html className="h-full bg-white">
         <body className="h-full">
            <TransitionPage />
            <Form />
        
        </body>
        </html>
        </>

            
    );
}

export default PortfolioPage;