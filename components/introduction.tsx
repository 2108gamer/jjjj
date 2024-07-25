import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
       
       <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/altt.png" priority width="400" height="400" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">en verdad, <br />
                        <TypeAnimation
                              sequence={[
                                'me amas?',
                                2000,
                                'me necesitas?',
                                2000,
                                'me quieres?',
                                2000,
                                'te gusto?',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Hola linda, esta es una web que hice con mucho amor para ti, aqui encontraras algunas de las cosas que mas me gustan de ti
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/love" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Pulsa aqui
                        </a>
                        <a href="/portfolio"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Cosas que mas me gustan de ti
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;