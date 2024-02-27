import "./global.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/rheav.png",
			name: "Victor Rhea",
			role: "Creator",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.",
			},
			{ type: "paragraph", content: "O nome do projeto é DoctorCare 🚀" },
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2023-09-19 17:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/maykbrito.png",
			name: "Mayk Brito",
			role: "Dev",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.",
			},
			{ type: "paragraph", content: "O nome do projeto é DoctorCare 🚀" },
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2023-09-10 17:00:00"),
	},
	{
		id: 3,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego Fernandes",
			role: "CTO",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.",
			},
			{ type: "paragraph", content: "O nome do projeto é DoctorCare 🚀" },
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2023-09-15 17:00:00"),
	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
