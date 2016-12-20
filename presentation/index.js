// Import React
import React from "react";

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	Deck,
	Fill,
	Heading,
	Image,
	Layout,
	Link,
	ListItem,
	List,
	Markdown,
	Quote,
	Slide,
	Spectacle,
	Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
	city: require("../assets/city.jpg"),
	kat: require("../assets/kat.png"),
	logo: require("../assets/formidable-logo.svg"),
	markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({primary: "#ff4081"});

export default class Presentation extends React.Component {
	render() {
		return (
			<Spectacle theme={theme}>
				<Deck transition={["zoom", "slide"]} transitionDuration={500}>
					<Slide transition={["zoom"]} bgColor="primary">
						<Heading size={1} fit caps lineHeight={1} textColor="black">
							Apollo
						</Heading>
						<Heading size={1} fit caps>
							A Client Side GraphQL Transport Framework
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Heading size={2} fit textColor="primary" textFont="primary">
							Who am I to talk?
						</Heading>
						<div>
							<Image src={images.twitter} />
							<Text>@GregHardin137</Text>
						</div>
						<div>
							<Image src={images.email} />
							<Text>greg@virtuallite.com</Text>
						</div>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" notes="">
						<Heading size={1} fit>
							What you should probably already know
						</Heading>
					</Slide>
					<Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
						<Heading size={1} fit>
							What is Apollo anyway?
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
						<Heading>
							GraphQL?
						</Heading>
					</Slide>
					<Slide transition={["zoom", "fade"]} bgColor="primary">
						<Heading size={1} fit>
							Queries
						</Heading>
						<CodePane>
							show a query here.
						</CodePane>
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Heading size={1} fit>
							Mutations
						</Heading>
						<CodePane>
							show a mutation here.
						</CodePane>
					</Slide>
					<Slide transition={["spin", "zoom"]} bgColor="tertiary" notes="Show some code after this one.">
						<Heading caps size={1} textColor="primary">
							Sounds good. How do I get started?
						</Heading>
					</Slide>
					<Slide transition={["slide", "spin"]} bgColor="primary">
						<Heading caps size={1}>
							How is this different from Relay?
						</Heading>
						<List>
							<ListItem>alskdfjlasjdf</ListItem>
						</List>
					</Slide>
					<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
						<Heading caps size={1}>
							Questions?
						</Heading>
					</Slide>
					<Slide transition={["spin", "slide"]} bgColor="tertiary">
						<Heading size={1} caps fit lineHeight={1.5} textColor="primary">
							Made with love in Seattle by
						</Heading>
						<div>
							<Image src={images.twitter} />
							<Text>@GregHardin137</Text>
						</div>
						<div>
							<Image src={images.email} />
							<Text>greg@virtuallite.com</Text>
						</div>
					</Slide>
				</Deck>
			</Spectacle>
		);
	}
}
