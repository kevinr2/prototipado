import { MenuComida } from "@/components/MenuComida";
import { NavbarDash } from "@/components/NavbarDash";
import Image from "next/image";


export const metadata = {
    title: "Cali | Turismo",
    description: "esta esta pagina esta echa para la seguridad del turista de colombia dando informacion correspodiente",
  };


export default function ciudad() {
  return (
    <>
        <NavbarDash />
        <div className="flex justify-around w-[100%] h-[100vh]">
        <div className="w-80 h-80 mt-8 ">

           <div className="product">
                    <Image src="/img/cali.jpg" alt="Product Image"  width={200} height={200}/>
                    <h2>CALI</h2>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
        <div className="w-96 h-96 mt-8 mr-40" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53586.37458572011!2d-76.53406993540509!3d3.3913769162719665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1732315105766!5m2!1ses!2sco" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        <div className="w-[100%] mb-10" style={{marginTop:"-140px"}}>
            <h1 className="text-center text-4xl mb-3 text-emerald-900">Gastronomia</h1>
            <hr className="mx-10 "></hr>
        </div>
        <MenuComida />
        <MenuComida />
    </>
    
  )
}
