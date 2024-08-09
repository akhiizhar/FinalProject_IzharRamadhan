import React from "react";
import Assets from "../assets/image.js";

export default function Footer() {
	return (
		<footer id="footer">
			<div className="container my-5 py-5">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-3">
						<p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
						<p>binarcarrental@gmail.com</p>
						<p>081-233-334-808</p>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<p>Our Services</p>
						<p>Why Us</p>
						<p>Testimonial</p>
						<p>FAQ</p>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<p>Connect with us</p>
						<img src={Assets.Facebook} className="my-2 mx-1" alt="Facebook" />
						<img src={Assets.Instagram} className="my-2 mx-1" alt="Instagram" />
						<img src={Assets.Twitter} className="my-2 mx-1" alt="Twitter" />
						<img src={Assets.Mail} className="my-2 mx-1" alt="Email" />
						<img src={Assets.Twitch} className="my-2 mx-1" alt="Twitch" />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<p>Copyright Binar 2022</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
