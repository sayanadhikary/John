

export default function Hero(){
    return <>
  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/8442097/pexels-photo-8442097.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">We care your health today & tomorrow</h1>
        <p className="lead">At John Diagnostic Centre, we are dedicated to providing accurate diagnostics and personalized care for all your pathology needs. With a team of experienced pathologists and state-of-the-art technology, we ensure reliable results and comprehensive evaluations to guide your healthcare decisions.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-danger btn-lg px-4 me-md-2">Test Now</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
    </>
}