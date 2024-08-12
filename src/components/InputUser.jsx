import React from "react";

export default function InputUser({ InputType }) {
	if (InputType.type === "option") {
		return (
			<>
				<div className="col-auto">
					<label className="form-label">
						{InputType.label}
						<span className="text-danger">*</span>
					</label>
					<select
						className="form-select"
						id="tipedriver"
						name="typeDriver"
						required
						onChange={InputType.fnChange}>
						<option>Pilih Tipe Driver</option>
						<option value="Dengan Supir">Dengan Sopir</option>
						<option value="Lepas Kunci">Tanpa Sopir (Lepas Kunci)</option>
					</select>
				</div>
			</>
		);
	} else if (
		InputType.type === "text" ||
		InputType.type === "date" ||
		InputType.type === "number"
	) {
		return (
			<>
				<div className="col-auto">
					<label className="form-label">
						{InputType.label}
						<span className="text-danger">*</span>
					</label>
					<input
						type={InputType.type}
						id={InputType.name}
						name={InputType.name}
						className="form-control"
						placeholder={InputType.placeholder}
						required
						onChange={InputType.fnChange}
					/>
				</div>
			</>
		);
	} else if (InputType.type === "time") {
		return (
			<>
				<div className="col-auto">
					<label className="form-label">
						{InputType.label}
						<span className="text-danger">*</span>
					</label>
					<select
						className="form-select"
						id={InputType.name}
						name={InputType.name}
						required
						onChange={InputType.fnChange}>
						<option>Pilih Jam Jemput</option>
						<option value="8">08.00</option>
						<option value="9">09.00</option>
						<option value="10">10.00</option>
						<option value="11">11.00</option>
						<option value="12">12.00</option>
					</select>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="col-auto">
					<label className="form-label invisible">{InputType.label}</label>
					<button
						type="button"
						id="cari"
						className="btn btn-success d-block"
						onClick={InputType.fnOnClick}>
						Cari Mobil
					</button>
				</div>
			</>
		);
	}
}
