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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
	apollo13: require('../assets/apollo13.jpg'),
	twitter: require('../assets/twitter-128.png'),
	email: require('../assets/servlet.png')
};

preloader(images);

const theme = createTheme({primary: "#0055FF"});

export default class Presentation extends React.Component {
	render() {
		return (
			<Spectacle theme={theme}>
				<Deck transition={["zoom", "slide"]} transitionDuration={500}>
					<Slide transition={["zoom"]} bgColor="primary">
						<Heading size={1} fit caps lineHeight={1} textColor="black">
							Apollo 13
						</Heading>
						<Heading size={1} fit caps>
							Ron Howard's Greatest Achievement?
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgColor="black">
						<Image src={images.apollo13.replace("/", "")} margin="0px auto" height="auto" width="100%"/>
					</Slide>
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
							<Image src={images.twitter} width={64} height={64} />
							<Text textColor="primary" textFont="primary">@GregHardin137</Text>
						</div>
						<div>
							<Image src={images.email} width={64} height={64} />
							<Text textColor="primary" textFont="primary">greg@icebrg.io</Text>
						</div>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" notes="">
						<Heading size={1} fit>
							What you should probably already know
						</Heading>
						<List>
							<Appear>
								<ListItem>JavaScript</ListItem>
							</Appear>
							<Appear>
								<ListItem>React</ListItem>
							</Appear>
							<Appear>
								<ListItem>GraphQL? (probably)</ListItem>
							</Appear>
							<Appear>
								<ListItem>Redux (maybe?)</ListItem>
							</Appear>
						</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" notes="">
						<Heading size={1} fit>
							What is Apollo anyway?
						</Heading>
					</Slide>
					<Slide transition={["slide"]}>
						<Heading>
							GraphQL?
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading size={2}>
							Queries
						</Heading>
						<CodePane
							lang="graphql"
							source={require("raw-loader!../assets/query-example.txt")}
							margin="20px auto"
							/>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading size={2}>
							Mutations
						</Heading>
						<CodePane
							lang="graphql"
							source={require("raw-loader!../assets/mutation-example.txt")}
							margin="20px auto"
							/>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading size={2} margin>
							How does it work?
						</Heading>
						<Appear>
							<Heading size={4}>Higher Order Component</Heading>
						</Appear>
						<Appear>
							<Text>graphql()</Text>
						</Appear>
					</Slide>
					<Slide transition={["slide"]} bgColor="tertiary" notes="Show some code after this one.">
						<Heading caps size={1} textColor="primary">
							Sounds good. How do I get started?
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading caps size={2}>
							How is this different from Relay?
						</Heading>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading caps size={2}>
							Root Container
						</Heading>
						<List>
							<ListItem>One per application</ListItem>
							<ListItem>Renders root level component</ListItem>
							<ListItem>Specifies the base level query</ListItem>
						</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading caps size={2}>
							Routes
						</Heading>
						<List>
							<ListItem>Base query you want to run</ListItem>
							<ListItem>Can pull in fragments from other components</ListItem>
						</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary">
						<Heading caps size={2}>
							Fragments
						</Heading>
						<List>
							<ListItem>Can be further broken down into more fragments</ListItem>
							<ListItem>Can be a query or mutation</ListItem>
						</List>
					</Slide>
					<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
						<Heading caps size={1}>
							Why did I pick Apollo?
						</Heading>
						<List>
							<ListItem>Less Boilerplate</ListItem>
							<ListItem>Ability to run multiple named queries in the same space</ListItem>
							<ListItem>Ability to separate queries from mutations</ListItem>
							<ListItem>Already integrated with Redux</ListItem>
						</List>
					</Slide>
					<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
						<Heading caps size={1}>
							Questions?
						</Heading>
					</Slide>
					<Slide transition={["fade"]} bgColor="tertiary">
						<Heading size={1} caps fit lineHeight={1.5} textColor="primary">
							Made with love in Seattle by
						</Heading>
						<div>
							<Image src={images.twitter} width={64} height={64} />
							<Text textColor="primary" textFont="primary">@GregHardin137</Text>
						</div>
						<div>
							<Image src={images.email} width={64} height={64} />
							<Text textColor="primary" textFont="primary">greg@icebrg.io</Text>
						</div>
					</Slide>
				</Deck>
			</Spectacle>
		);
	}
}
