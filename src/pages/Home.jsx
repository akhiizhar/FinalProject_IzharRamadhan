import React from "react";
import Navigation from "../components/Navigation";
import Assets from "../assets/image";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function home() {
	return (
		<>
			<Navigation />

			{/* <!-- Foto zenix --> */}
			{/* cek */}
			<Hero isButton={true} />

			{/* <!-- Our sevices --> */}
			<section id="our-services">
				<div className="container py-5 my-5">
					{/* <!-- container digunakan di setiap section agar tampilan rapi dan konsisten --> */}

					{/* <!-- grid bootstrap menggunakan flex jadi kita bisa mengatur aligment mengunakan align-items dan justify-content --> */}
					<div className="row align-items-center">
						{/* <!-- perilaku col di bawah sama dengan yang di terapkan di hero -->
					<!-- mb adalah className utilitas bootstrap untuk menambahkan margin bottom -->
					<!-- sama dengan col karena kita hanya membutuhkan margin di ukuran layar terkecil sampai 767px -->
					<!-- maka di ukuran layar 768px ke atas kita hapus marginnya dengan menggunakan mb-md-0 --> */}
						<div className="col-12 col-md-6 mb-5 mb-md-0">
							<img
								src={Assets.Service}
								className="img-fluid"
								alt="TMMIN Car Rental Services"
							/>
						</div>
						<div className="col-12 col-md-6">
							<h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
							<p>
								Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
								lebih murah dibandingkan yang lain, kondisi mobil baru, serta
								kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
								wedding, meeting, dll.
							</p>
							<ul>
								<li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
								<li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
								<li>Sewa Mobil Jangka Panjang Bulanan</li>
								<li>Gratis Antar - Jemput Mobil di Bandara</li>
								<li>Layanan Airport Transfer / Drop In Out</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Why Us --> */}
			<section id="why-us">
				<div className="container py-5 my-5">
					{/* <!-- container digunakan di setiap section agar tampilan rapi dan konsisten --> */}
					<h2 className="mb-3">Why Us?</h2>
					<p className="mb-4">Mengapa harus pilih Binar Car Rental?</p>
					{/* <!-- cara cepat membuat row col -> ketik : div.row>div.col*4 , kemudian ctrl + space  --> */}
					<div className="row">
						{/* <!-- perilaku col di bawah sama dengan yang di terapkan di hero -->
					<!-- tetapi yang berbeda disini kita menggunakan 3 ukuran berbeda  -->
					<!-- col-12 (full) di ukuran layar terkecil sampai 767px -->
					<!-- col-md-6 (50:50 / setengah ukuran) di ukuran layar 768px keatas sampai 991px -->
					<!-- col-lg-3 (dibagi menjadi 4 kolom (12/4)) akan di terapkan di ukuran layar mulai 992px keatas --> */}
						<div className="col-12 col-md-6 col-lg-3 my-2">
							<div className="card">
								<div className="card-body">
									<img
										src={Assets.IconComplete}
										className="mb-4"
										alt="TMMIN Car Rental - Mobil Lengkap"
									/>
									<h3 className="mb-4">Mobil Lengkap</h3>
									<p>
										Tersedia banyak pilihan mobil, kondisi masih baru, bersih
										dan terawat
									</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3 my-2">
							<div className="card">
								<div className="card-body">
									<img
										src={Assets.IconPrice}
										className="mb-4"
										alt="TMMIN Car Rental - Harga Murah"
									/>
									<h3 className="mb-4">Harga Murah</h3>
									<p>
										Harga murah dan bersaing, bisa bandingkan harga kami dengan
										rental mobil lain
									</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3 my-2">
							<div className="card">
								<div className="card-body">
									<img
										src={Assets.Icon24}
										className="mb-4"
										alt="TMMIN Car Rental - Layanan 24 Jam"
									/>
									<h3 className="mb-4">Layanan 24 Jam</h3>
									<p>
										Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
										juga tersedia di akhir minggu
									</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3 my-2">
							<div className="card">
								<div className="card-body">
									<img
										src={Assets.IconProfessional}
										className="mb-4"
										alt="TMMIN Car Rental - Sopir Profesional"
									/>
									<h3 className="mb-4">Sopir Profesional</h3>
									<p>
										Sopir yang profesional, berpengalaman, jujur, ramah dan
										selalu tepat waktu
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Testimonial --> */}
			<Testimonial />
			{/* <!-- Kotak merah --> */}
			<section id="banner">
				<div className="container">
					<div
						className="card bg-red text-light d-flex align-items-center justify-content-center"
						style={{ height: "326px" }}>
						<h1 style={{ marginBottom: "0%", textAlign: "center" }}>
							Sewa Mobil di (Lokasimu) Sekarang
						</h1>
						<p
							style={{
								marginTop: "20px",
								marginBottom: "50px",
								wordWrap: "break-word",
								height: "40px",
								textAlign: "center",
							}}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
							quasi est, repudiandae ill
						</p>
						<Link to="/sewa" className="btn btn-success">
							Mulai Sewa Mobil
						</Link>
					</div>
				</div>
			</section>

			{/* <!-- FAQ --> */}
			<section id="faq">
				<div className="container py-5 my-5">
					<div className="row">
						<div className="col-12 col-md-5">
							<h2>Frequently Asked Question</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
						</div>
						<div className="col-12 col-md-7">
							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header>
										Apa saja syarat yang dibutuhkan?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										Berapa hari minimal sewa mobil lepas kunci?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>
										Berapa hari sebelumnya sabaiknya booking sewa mobil?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>
										Apakah Ada biaya antar-jemput?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>
										Bagaimana jika terjadi kecelakaan?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</section>
			{/* <section id="faq">
				<div className="container py-5 my-5">
					<div className="row">
						<div className="col-12 col-md-6">
							<h2>Frequntly Asked Question</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</div>
						<div className="col-12 col-md-6">
							<div className="accordion" id="accordionExample">
								<div className="accordion-item mb-4">
									<h2 className="accordion-header">
										<button
											className="accordion-button collapsed border"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne">
											Apa saja syarat yang dibutuhkan?
										</button>
									</h2>
									<div
										id="collapseOne"
										className="accordion-collapse collapse"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>ipsum dolor sit amet.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item mb-4">
									<h2 className="accordion-header">
										<button
											className="accordion-button collapsed border"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="true"
											aria-controls="collapseTwo">
											Berapa hari minimal sewa mobil lepas kunci?
										</button>
									</h2>
									<div
										id="collapseTwo"
										className="accordion-collapse collapse"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>ipsum dolor sit amet.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item mb-4">
									<h2 className="accordion-header">
										<button
											className="accordion-button collapsed border"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseThree"
											aria-expanded="true"
											aria-controls="collapseThree">
											Berapa hari sebelumnya sabaiknya booking sewa mobil?
										</button>
									</h2>
									<div
										id="collapseThree"
										className="accordion-collapse collapse"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>ipsum dolor sit amet.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item mb-4">
									<h2 className="accordion-header">
										<button
											className="accordion-button collapsed border"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseFour"
											aria-expanded="true"
											aria-controls="collapseFour">
											Apakah Ada biaya antar-jemput?
										</button>
									</h2>
									<div
										id="collapseFour"
										className="accordion-collapse collapse"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>ipsum dolor sit amet.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item mb-4">
									<h2 className="accordion-header">
										<button
											className="accordion-button collapsed border"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseFive"
											aria-expanded="true"
											aria-controls="collapseFive">
											Bagaimana jika terjadi kecelakaan?
										</button>
									</h2>
									<div
										id="collapseFive"
										className="accordion-collapse collapse"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>ipsum dolor sit amet.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* <!--Footer  --> */}
			<Footer />
		</>
	);
}
