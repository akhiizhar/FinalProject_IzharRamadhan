import React from "react";
import Assets from "../assets/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { useState } from "react";
import { listCars } from "../utils/getCars";
import { Link } from "react-router-dom";
import InputUser from "../components/InputUser";

export default function Sewa() {
	const [cars, setCars] = useState(null);
	const [inputData, setInputData] = useState({
		typeDriver: "",
		tanggal: "",
		jam: "",
		capacity: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputData({
			...inputData,
			[name]: value,
		});
	};

	const handleSearch = async (event) => {
		event.preventDefault();

		if (
			inputData.typeDriver === "" ||
			inputData.tanggal === "" ||
			inputData.jam === ""
		) {
			return alert("Mohon dipilih Tipe Driver, Tanggal dan waktu jemput");
		}

		const data = await listCars((el) => {
			return inputData.capacity
				? el.capacity >= inputData.capacity
				: true &&
						el.typeDriver === inputData.typeDriver &&
						el.availableAt >= new Date(inputData.tanggal) &&
						el.availableAt.getHours() >= Number(inputData.jam);
		});

		setCars(data);
	};

	return (
		<>
			<Navigation />
			<Hero isButton={false} />

			{/* Search sewa mobil */}
			<section id="search" className="mt-n5" style={{ marginTop: "-40px" }}>
				<div className="container">
					<div
						className="card w-75
					 center mx-auto p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
						<div className="card-body">
							<form className="row g-3 justify-content-center" id="form-search">
								<InputUser
									InputType={{
										type: "option",
										label: "Tipe Driver",
										fnChange: handleChange,
									}}
								/>
								<InputUser
									InputType={{
										type: "date",
										id: "tanggal",
										name: "tanggal",
										label: "Tanggal",
										fnChange: handleChange,
									}}
								/>
								<InputUser
									InputType={{
										type: "time",
										id: "jam",
										name: "jam",
										label: "Waktu / Jam Jemput",
										fnChange: handleChange,
									}}
								/>
								<InputUser
									InputType={{
										type: "number",
										id: "penumpang",
										name: "capacity",
										placeholder: "Masukkan Jumlah",
										label: "Jumlah Penumpang",
										fnChange: handleChange,
									}}
								/>
								<InputUser
									InputType={{
										type: "button",
										id: "cari",
										label: "Cari Mobil",
										fnOnClick: handleSearch,
									}}
								/>
							</form>
						</div>
					</div>
				</div>
			</section>

			<section id="search-result" className="my-5">
				<div className="container">
					<div className="row">
						{cars
							? cars.map((e, index) => (
									<div className="col-12 col-md-4 mb-4" key={index}>
										<div className="card pb-2">
											<img
												src={e.image}
												className="card-img-top img-fluid"
												alt={e.name}
											/>
											<div className="card-body">
												<h6>{e.name}</h6>
												<h5 style={{ fontWeight: "bold" }}>
													{new Intl.NumberFormat("id-ID", {
														style: "currency",
														currency: "IDR",
													}).format(e.price)}{" "}
													/ Hari
												</h5>

												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Tempora, accusamus!
												</p>
												<ul>
													<li>
														<img src={Assets.User} />
														<span>{e.capacity} Orang</span>
													</li>
													<li>
														<img src={Assets.Setting} />
														<span>Manual</span>
													</li>
													<li>
														<img src={Assets.Calender} />
														<span>Tahun 2020</span>
													</li>
												</ul>
												<Link
													to={"/Detail/" + e.id}
													className="btn btn-success d-block">
													Pilih Mobil
												</Link>
											</div>
										</div>
									</div>
							  ))
							: cars !== null && (
									<p className="text-center">
										Hasil Tidak Ditemukan, Silahkan Melakukan Pencarian Ulang!
									</p>
							  )}
					</div>
				</div>
			</section>

			{/* <!-- Sewa Mobil --> */}
			{/* <section id="search" style={{ marginTop: "-40px" }}>
				<div className="container">
					<div className="card">
						<div className="card-body">
							<form className="row g-3 justify-content-center align-items-end">
								<div className="col-auto">
									<label className="form-label">Tiper Driver</label>
									<select className="form-select" id="tipedriver">
										<option className="form-select" disabled selected>
											Pilih Tipe Driver
										</option>
										<option value="Dengan Supir">Dengan Sopir</option>
										<option value="Lepas Kunci">
											Tanpa Sopir (Lepas Kunci)
										</option>
									</select>
								</div>
								<div className="col-auto">
									<label className="form-label">Tanggal</label>
									<input
										type="date"
										id="tanggal"
										className="form-control"
										placeholder="Pilih Tanggal"
									/>
								</div>
								<div className="col-auto">
									<label className="form-label">Waktu / Jam Jemput</label>
									<input
										type="time"
										id="jam"
										className="form-control"
										placeholder="Pilih Waktu"
									/>
								</div>
								<div className="col-auto">
									<label className="form-label">Jumlah Penumpang</label>
									<input
										type="number"
										id="penumpang"
										className="form-control"
										placeholder="Jumlah Penumpang"
									/>
								</div>
								<div className="col-auto">
									<button type="button" id="cari" className="btn btn-success">
										Cari Mobil
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section> */}

			<Footer />
		</>
	);
}
