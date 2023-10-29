import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./zira-logo.png"
								alt="zira"
								className="work-image"
							/>
							<div className="work-title">Zira</div>
							<div className="work-subtitle">
								Senior Full-stack Developer
							</div>
							<div className="work-duration">2020 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./codevalue-logo.png"
								alt="codevalue"
								className="work-image"
							/>
							<div className="work-title">CodeValue</div>
							<div className="work-subtitle">
								Full-stack Developer
							</div>
							<div className="work-duration">2019 - 2020</div>
						</div>
						<div className="work">
							<img
								src="./qulean-logo.png"
								alt="qlean"
								className="work-image"
							/>
							<div className="work-title">Qlean</div>
							<div className="work-subtitle">
								Mobile & Front End Developer
							</div>
							<div className="work-duration">2018</div>
						</div>
						<div className="work">
							<img
								src="./frumatic-logo.jpeg"
								alt="frumatic"
								className="work-image"
							/>
							<div className="work-title">Frumatic</div>
							<div className="work-subtitle">
								Junior Full-stack Developer
							</div>
							<div className="work-duration">2016-2018</div>
						</div>
						<div className="work">
							<img
								src="./freelance.png"
								alt="freelance"
								className="work-image"
								
							/>
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">2014 - 2016</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
