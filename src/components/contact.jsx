import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render() {
    const { status } = this.state;
      return (
      <div>
        <section class="colorlib-contact" data-section="contact">
  				<div class="colorlib-narrow-content">
  					<div class="row">
  						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
  							<span class="heading-meta">Get in Touch</span>
  							<h2 class="colorlib-heading">Contact Me</h2>
  						</div>
  					</div>
  					<div class="row">
  						<div class="col-md-5">
  							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
  								<div class="colorlib-icon">
  									<i class="icon-mail"></i>
  								</div>
  								<div class="colorlib-text">
  									<p>ragoolkrishnan.ram@gmail.com</p>
  								</div>
  							</div>

  							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
  								<div class="colorlib-icon">
  									<i class="icon-map"></i>
  								</div>
  								<div class="colorlib-text">
  									<p>41, rue des pinsons, Créteil-94000</p>
  								</div>
  							</div>

  							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
  								<div class="colorlib-icon">
  									<i class="icon-phone"></i>
  								</div>
  								<div class="colorlib-text">
  									<p><a href="tel://">+33 6 03 21 89 31</a></p>
  								</div>
  							</div>
  						</div>
  						<div class="col-md-7 col-md-push-1">
  							<div class="row">
  								<div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
  									<form onSubmit={this.submitForm} action="https://formspree.io/mlepnqwo" method="POST">
  										<div class="form-group">
  											<input type="text" class="form-control" placeholder="Name" name="Name" required/>
  										</div>
  										<div class="form-group">
  											<input type="email" class="form-control" placeholder="Email" name="Email" required/>
  										</div>
                      <div class="form-group">
  											<input type="text" class="form-control" placeholder="Subject" name="Subject" required/>
  										</div>
  										<div class="form-group">
                        <textarea id="message" cols="30" rows="7" class="form-control" placeholder="Message" name="Message" required/>

  										</div>
  										<div class="form-group">
                        <input type="submit" class="btn btn-primary btn-send-message" value="Send Message"/>
                          {status === "SUCCESS" && <p>I'll  get back to you as soon as possible.</p>}
                         {status === "ERROR" && <p>Ooops! something is wrong.</p>}
                  		</div>
  									</form>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>
      </div>
    )
  }
  submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
}
