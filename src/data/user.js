const INFO = {
	main: {
		title: "Yuri Morkovnik",
		name: "Yuri Morkovnik",
		email: "yuriymork62@gmail.com",
		logo: "./logo.png",
	},

	socials: {
		github: "https://github.com/YuriyMorkovnik",
		linkedin: "https://www.linkedin.com/in/yuri-morkovnik-b61599125/"
	},

	homepage: {
		title: "Web Wizard Extraordinaire - Crafting Digital Magic",
		description:
		"Greetings, wanderer of the World Wide Web! I'm Yuri, your friendly neighborhood Full Stack Developer with a penchant for creating digital wonders. Join me on this magical journey through the digital realm, where I conjure up stunning web applications and microservices."
		},

	about: {
		title: "I’m Yuri. I live in Israel, where I design the future.",
		description:
			`I'm a seasoned developer with experience in startups, consulting, and mobile apps. I specialize in front-end work, creating microservices, and wonderful projects. I've passed React from the beginning, dived into micro frontends and lamdas, tackled legacy code and had plenty cups of coffee creating amazing web interfaces.

			My skills span React, Redux, NodeJS, AWS, and more. I'm serious about delivering results and making tech dreams come true. Let's discuss your project and make it happen.
			`,
			jobs: [
				{
					title: 'Zira (2020 - 2023)',
					link: 'https://www.joinzira.com',
					description: `About: I worked at Zira, which sounds fancy, but it's basically a bunch of tech geeks trying to make sense of industrial stuff.
					Role: I led the front-end team, like a rockstar leading a band, creating cool features such as customizable dashboards, a form builder, and even a built-in messenger for office gossip. I also dabbled in agile philosophy and did my fair share of code reviews - didn't spot any hidden jokes, though.
					`,
				},
				{
					title: 'CodeValue (2019 - 2020)',
					link: 'https://codevalue.com',
					description: `About: Worked in Israel, where the only thing hotter than the weather was the tech scene.
					Guesty: Helped manage real estate services, but instead of houses, I built micro-apps and tested them like a mad scientist.
					Continuity Software: I joined the "Let's bring legacy code into the 21st century" club - quite the challenge, let me tell you.
					`,
				},
				{
					title: 'Qlean (2018)',
					link: 'https://qlean.ru/',
					description: `About: Worked on a cleaning app but didn't mop floors. I made a mobile app for managing orders, not my own pizza orders, though.
					Role: Mostly focused on the mobile app - clean code for a cleaning app, you get it, right?
					`,
				},
				{
					title: 'Frumatic (2016 - 2018):',
					link: 'https://frumatic.com/',
					description: `About: Built a storytelling app, but no one wanted to listen to my stories about code.
					Role: Developed features for a web app and an admin panel and became a UI performance guru. Made the app smoother than a buttered ice rink.
					`,
				},
				{
					title: 'Freelance (2014 - 2016)',
					description: `As a freelance wizard, I crafted landing pages and widgets, adding a dash of charm to the digital world.`,
				},
				{
					title: 'State University of Management (2012 - 2016)',
					link: 'https://guu.ru/language/en/',
					description: `Graduated with a Bachelor's in Computer Science, like I was on a quest to find the ultimate code.
					`,
				},
				{
					title: 'Certifications and Courses (neverending)',
					description: `Completed a bunch of courses, because why not? They included everything from React to AWS. If coding were a sport, I'd be the all-star athlete.
					`,
				}
			]
	},

	projects: [
		{
			title: "Dialog Router",
			description:
				"The React Dialog Router is a versatile component that simplifies the management of dialogs within your React application. It provides a context-based approach to open, close, and navigate between dialogs.",
			logo: "./react-icon.png",
			linkText: "View Project",
			link: "https://github.com/YuriyMorkovnik/react-dialog-router",
		},

		{
			title: "AWS Template for fast-track integrations",
			description: "This repository serves as a template for creating integrations by setting up the configuration of a single JSON file. Ultimately, a cloud formation template with lambda functions gets created. It gets assembled using esbuild and deploy using serverless.",
			logo: "./aws-icon.png",
			linkText: "View Project",
			link: "https://github.com/YuriyMorkovnik/aws-template-builder",
		},

		{
			title: "Utils",
			description:
				"A lightweight set of fast and useful utils without any dependencies. There are functions like asyncMap, mergeDeepRightAll, switchCase, matches, findBy and so on. These functions are produnction ready and used in my real projects",
			logo: "./ts-icon.png",
			linkText: "View Project",
			link: "https://github.com/YuriyMorkovnik/utils",
		}
	],
};

export default INFO;
