import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							Throughout my journey in the world of programming, I've conjured a diverse array of projects, each one a testament to the magical art of coding. These creations are not mere lines of code; they are spells of innovation and craftsmanship.

							Behold, many of these magical projects are open-source, waiting for fellow wizards like you to explore and wield their power. As you delve into the enchanted source code, consider adding your incantations to further enhance their abilities.

							Collaboration is the secret to our magical world's growth and mastery. If you possess insights or envision enhancements, don't hesitate to share your wizardry. The exchange of knowledge and ideas is the path to greater wisdom.

							Join me in this mystical journey through the realms of programming, where spells become software, and innovation knows no bounds. Your talents and feedback are always welcome. Together, we shall unlock the secrets of the digital universe!
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
