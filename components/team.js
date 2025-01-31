import Image from "next/image";

export default function Team(){
    return <>
    <div className="container">
    <h2 className="pb-2 border-bottom text-center"><i className="bi bi-dash-lg text-danger"></i>Our Doctors <i className="bi bi-dash-lg text-danger"></i></h2>

    <div className="row">        
      <div className="col-lg-4 text-center">
        <Image className="bd-placeholder-img rounded-circle"  src="/Asset/Images/doctor1.jpg" width={140} height={140} alt="Doctor1" />
        <h2 className="fw-normal">Dr. Sudipta Laha</h2>
        <p>Doctor of Veterinary Medicine (D.V.M.) with Specialization in Veterinary Pathology:</p>
        <p><a className="btn btn-danger" href="#">View details »</a></p>
      </div>

      <div className="col-lg-4 text-center">
        <Image className="bd-placeholder-img rounded-circle" src="/Asset/Images/doctor2.jpg" width={140} height={140} alt="Doctor2" />
        <h2 className="fw-normal">Dr. Mousumi Konar</h2>
        <p>Doctor of Medicine (M.D.) with Specialization in Pathology:</p>
        <p><a className="btn btn-danger" href="#">View details »</a></p>
      </div>
      <div className="col-lg-4 text-center">
        <Image className="bd-placeholder-img rounded-circle"  src="/Asset/Images/doctor3.jpg" width={140} height={140} alt="Doctor3" /> 
        <h2 className="fw-normal">Dr. Soumitra Bera</h2>
        <p>Bachelors Degree (B.S. or B.Sc.) in Pathology or Biomedical Science:</p>
        <p><a className="btn btn-danger" href="#">View details »</a></p>
      </div>
    </div>
  </div>
    </>
}