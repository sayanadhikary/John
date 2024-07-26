import Image from "next/image";

export default function Slideshow(){
    return <>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <Image src="/Asset/Images/carousel3.png" width={1000} height={1000} className="d-block w-100 h-100" alt="slideOne" />
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <Image src="/Asset/Images/carousel1.png" width={1000} height={1000} className="d-block w-100 h-100" alt="slideTwo"/>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <Image src="/Asset/Images/carousel5.png" width={1000} height={1000} className="d-block w-100 h-100" alt="slideThree" />
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
