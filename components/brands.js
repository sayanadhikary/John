import Image from "next/image";

import hca from "@/Asset/Logos/HCA Healthcare.png"
import cigna from "@/Asset/Logos/Cigna Healthcare.png"
import king from "@/Asset/Logos/Kindred Healthcare.png"
import molina from "@/Asset/Logos/Molina Healthcare.png"
import univer from "@/Asset/Logos/University of Utah Health Care.png"
import tent from "@/Asset/Logos/Tenet Healthcare.png"

export default function Brands(){
    return <>
    <div className="container-fluid my-4 row text-center bg-body-secondary">
        <div className="col-xl-2 py-4">
        <Image  src={tent} height={70} alt="BrandImage" />
        </div>
        <div className="col-xl-2 py-4">
        <Image  src={univer} height={70} alt="BrandImage" />
        </div>
        <div className="col-xl-2 py-4">
        <Image  src={molina} height={70} alt="BrandImage" /> 
        </div>
        <div className="col-xl-2 py-4">
        <Image  src={king} height={70} alt="BrandImage" /> 
        </div>
        <div className="col-xl-2 py-4">
        <Image  src={cigna} height={70} alt="BrandImage" />
        </div>
        <div className="col-xl-2 py-4">
        <Image  src={hca} height={70} alt="BrandImage" />
        </div>     
        
    </div>
    </>
}