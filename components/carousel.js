import Image from "next/image";

import carImage1 from "@/Asset/Images/carousel1.png";
import carImage5 from "@/Asset/Images/carousel5.png";
import carImage3 from "@/Asset/Images/carousel3.png";

export default function Slideshow(){
    return <>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <Image src={carImage3} width={0} height={0} className="d-block w-100" alt="slideOne" />
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <Image src={carImage1} width={0} height={0} className="d-block w-100" alt="slideTwo"/>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <Image src={carImage5} width={0} height={0} className="d-block w-100" alt="slideThree" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
}
