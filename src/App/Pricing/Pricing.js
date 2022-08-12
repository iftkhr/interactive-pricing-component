import { useEffect, useState } from "react";
import "./Pricing.css";

function Pricing() {
	let priceList = {
		1: "8.00",
		2: "12.00",
		3: "16.00",
		4: "24.00",
		5: "36.00",
	};

	let discountedPriceList = {
		1: "6.00",
		2: "8.00",
		3: "12.00",
		4: "18.00",
		5: "27.00",
	};

	let viewList = {
		1: "10K",
		2: "50K",
		3: "100K",
		4: "500K",
		5: "1M",
	};

	const [pList, setPList] = useState(priceList);
	const [billing, setBilling] = useState("monthly");
	const [views, setViews] = useState(viewList[3]);
	const [price, setPrice] = useState(pList[3]);

	const changeBilling = () => {
		if (billing === "yearly") {
			setBilling("monthly");
			setPList(priceList);
		} else if (billing === "monthly") {
			setBilling("yearly");
			setPList(discountedPriceList);
		}
	};

	const changePrice = (event) => {
		var target = event.currentTarget;
		var value = ((target.value - 1) / 4) * 100;
		target.style.background =
			"linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
			value +
			"%, hsl(224, 65%, 95%) " +
			value +
			"%, hsl(224, 65%, 95%) 100%)";
		if (target.value === "1") {
			setViews(viewList[1]);
			setPrice(pList[1]);
		}
		if (target.value === "2") {
			setViews(viewList[2]);
			setPrice(pList[2]);
		}
		if (target.value === "3") {
			setViews(viewList[3]);
			setPrice(pList[3]);
		}
		if (target.value === "4") {
			setViews(viewList[4]);
			setPrice(pList[4]);
		}
		if (target.value === "5") {
			setViews(viewList[5]);
			setPrice(pList[5]);
		}
	};

	useEffect(() => {
		let target = document.getElementById("slidebar");
		if (target.value === "1") {
			setPrice(pList[1]);
		}
		if (target.value === "2") {
			setPrice(pList[2]);
		}
		if (target.value === "3") {
			setPrice(pList[3]);
		}
		if (target.value === "4") {
			setPrice(pList[4]);
		}
		if (target.value === "5") {
			setPrice(pList[5]);
		}
	}, [pList]);

	return (
		<div className="pricing-container">
			<div className="top">
				<div className="views">{views} PAGEVIEWS</div>
				<div className="price">
					${price} <span className="permonth">/ month</span>
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
					onInput={changePrice}
				/>
				<div className="billing">
					<div className="monthly">Monthly Billing</div>
					<label className="switch">
						<input
							type="checkbox"
							id="toggle"
							value={billing}
							onInput={changeBilling}
						/>
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
