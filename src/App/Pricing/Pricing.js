import "./Pricing.css";

function Pricing() {
	return (
		<div className="pricing-container">
			<div className="top">
				<div className="views">100k PAGEVIEWS</div>
				<div className="price">
					$16.00 <span className="permonth">/ month</span>
				</div>
			</div>
			<div className="middle">
				<input
					className="slider"
					type="range"
					min="1"
					max="5"
					defaultValue="3"
					id="slidebar"
				/>
				<div className="billing">
					<div className="monthly">Monthly Billing</div>
					<label className="switch">
						<input type="checkbox" id="toggle" />
						<span className="round"></span>
					</label>
					<div className="yearly">
						Yearly Billing{" "}
						<span className="discount">25% discount</span>
					</div>
				</div>
			</div>
			<hr className="line" />
			<div className="bottom">
				<div className="list">
					<div className="items">
						<img src="icon-check.svg" alt="" />
						<span className="item">Unlimited websites</span>
					</div>
					<div className="items">
						<img src="icon-check.svg" alt="" />
						<span className="item">100% data ownership</span>
					</div>
					<div className="items">
						<img src="icon-check.svg" alt="" />
						<span className="item">Email reports</span>
					</div>
				</div>
				<div className="button">
					<button className="button">Start my trial</button>
				</div>
			</div>
		</div>
	);
}

export default Pricing;
