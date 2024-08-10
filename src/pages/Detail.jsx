import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Detail() {
	const params = useParams();
	const cachedCars = localStorage.getItem("CARS");
	const parsedCars = JSON.parse(cachedCars);
	const [data] = useState(parsedCars.find((e) => e.id == params.id));
	return (
		<>
			<Navigation />
			<section id="detail">
				<div className="container">
					<div className="row align-items-start">
						<div className="col-10 col-md-6 offset-md-1">
							<div className="card">
								<div className="card-body">
									<h5>Tentang Paket</h5>
									<h5>Include</h5>
									<ul>
										<li>
											Apa saja yang termasuk dalam paket misal durasi max 12 jam
										</li>
										<li>Sudah termasuk bensin selama 12 jam</li>
										<li>Sudah termasuk Tiket Wisata</li>
										<li>Sudah termasuk pajak</li>
									</ul>
									<h5>Exclude</h5>
									<ul>
										<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
										<li>
											Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
											20.000/jam
										</li>
										<li>Tidak termasuk akomodasi penginapan</li>
									</ul>

									<h5>Refund, Reschedule, Overtime</h5>
									<ul>
										<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
										<li>
											Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
											20.000/jam
										</li>
										<li>Tidak termasuk akomodasi penginapan</li>
										<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
										<li>
											Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
											20.000/jam
										</li>
										<li>Tidak termasuk akomodasi penginapan</li>
										<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
										<li>
											Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
											20.000/jam
										</li>
										<li>Tidak termasuk akomodasi penginapan</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-10 col-md-4 ">
							<div className="card">
								<div className="card-body">
									<img className="img-fluid" src={data.image} alt={data.name} />
									<h4>{data.name}</h4>
									<span>
										{data.capacity - 2} - {data.capacity} orang
									</span>
									<h5>Total {data.price}</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer></footer>
		</>
	);
}
