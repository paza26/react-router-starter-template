import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "The Alps — Europe's Greatest Mountain Range" },
		{
			name: "description",
			content:
				"Discover the Alps: Europe's iconic mountain range spanning 8 countries, home to Mont Blanc, the Matterhorn, the Dolomites, and much more.",
		},
		{ name: "og:title", content: "The Alps — Europe's Greatest Mountain Range" },
		{ name: "og:type", content: "website" },
	];
}

export default function Home() {
	return <Welcome />;
}
