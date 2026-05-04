import { useState, useEffect, useRef } from "react";

// ─── Navbar ───────────────────────────────────────────────────────────────────

function MountainIcon() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M2 24L10 8L14 14L18 10L26 24H2Z"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinejoin="round"
				fill="none"
			/>
			<path
				d="M18 10L21 6L26 14"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinejoin="round"
				fill="none"
			/>
		</svg>
	);
}

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const navLinks = [
		{ label: "Explore", href: "#discover" },
		{ label: "Peaks", href: "#peaks" },
		{ label: "Activities", href: "#activities" },
		{ label: "Gallery", href: "#gallery" },
		{ label: "Nature", href: "#nature" },
		{ label: "Facts", href: "#facts" },
		{ label: "Resources", href: "#resources" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-12">
					{/* Logo */}
					<a
						href="#"
						className={`flex items-center gap-2 font-semibold text-[15px] tracking-tight transition-colors ${
							scrolled ? "text-[#1d1d1f]" : "text-white"
						}`}
					>
						<MountainIcon />
						<span>The Alps</span>
					</a>

					{/* Desktop nav */}
					<div className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className={`text-[13px] transition-colors hover:opacity-70 ${
									scrolled ? "text-[#1d1d1f]" : "text-white"
								}`}
							>
								{link.label}
							</a>
						))}
					</div>

					{/* Mobile hamburger */}
					<button
						className={`md:hidden flex flex-col gap-[5px] p-1 ${
							scrolled ? "text-[#1d1d1f]" : "text-white"
						}`}
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-label="Toggle menu"
					>
						<span
							className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
						/>
						<span
							className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
						/>
						<span
							className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
						/>
					</button>
				</div>
			</div>

			{/* Mobile dropdown */}
			{mobileOpen && (
				<div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="block px-6 py-3 text-[15px] text-[#1d1d1f] border-b border-gray-100 hover:bg-gray-50"
							onClick={() => setMobileOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
	return (
		<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
			{/* Background image */}
			<img
				src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=85"
				alt="Alps panorama"
				className="absolute inset-0 w-full h-full object-cover"
			/>
			{/* Gradient overlays */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/60" />

			{/* Content */}
			<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
				<p className="text-white/80 text-sm font-medium tracking-[0.2em] uppercase mb-5">
					Europe's Crown
				</p>
				<h1
					className="text-white font-bold leading-[1.05] tracking-tight mb-6"
					style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
				>
					The Alps
				</h1>
				<p className="text-white/85 text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
					1,200 kilometres of breathtaking peaks, ancient glaciers,
					and timeless beauty stretching across the heart of Europe.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<a
						href="#discover"
						className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#1d1d1f] text-[15px] font-semibold hover:bg-white/90 transition-colors"
					>
						Discover
					</a>
					<a
						href="#peaks"
						className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/60 text-white text-[15px] font-semibold hover:bg-white/10 transition-colors"
					>
						Explore peaks
					</a>
				</div>
			</div>

			{/* Scroll cue */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60">
				<span className="text-xs tracking-widest uppercase">Scroll</span>
				<svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
					<rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.2" />
					<circle cx="7" cy="6" r="1.5" fill="currentColor">
						<animateTransform
							attributeName="transform"
							type="translate"
							values="0 0;0 6;0 0"
							dur="1.8s"
							repeatCount="indefinite"
						/>
					</circle>
				</svg>
			</div>
		</section>
	);
}

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────

function useScrollReveal<T extends HTMLElement>() {
	const ref = useRef<T>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.12 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return { ref, visible };
}

// ─── Discovery / Intro ────────────────────────────────────────────────────────

const stats = [
	{ value: "1,200 km", label: "Arc length" },
	{ value: "4,808 m", label: "Highest peak" },
	{ value: "8", label: "Countries" },
	{ value: "14 M+", label: "Visitors per year" },
];

function Discovery() {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<section id="discover" className="bg-white py-28 px-4">
			<div
				ref={ref}
				className={`max-w-[800px] mx-auto text-center transition-all duration-700 ${
					visible ? "section-visible" : "section-hidden"
				}`}
			>
				<p className="text-[#6e6e73] text-sm font-medium tracking-[0.18em] uppercase mb-4">
					About the Alps
				</p>
				<h2
					className="text-[#1d1d1f] font-bold leading-tight tracking-tight mb-6"
					style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
				>
					Breathtaking. Boundless. Beloved.
				</h2>
				<p className="text-[#6e6e73] text-xl leading-relaxed mb-16 max-w-[620px] mx-auto">
					Stretching from France and Monaco to Slovenia, the Alps have shaped
					civilisations, inspired artists, and drawn adventurers for millennia.
					Home to thousands of glaciers, crystal-clear lakes, and iconic summits,
					they remain one of Earth's most extraordinary landscapes.
				</p>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#d2d2d7] pt-12">
					{stats.map((s) => (
						<div key={s.label} className="flex flex-col items-center">
							<span
								className="text-[#1d1d1f] font-bold mb-1"
								style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
							>
								{s.value}
							</span>
							<span className="text-[#6e6e73] text-sm tracking-wide uppercase">
								{s.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// ─── Peaks ────────────────────────────────────────────────────────────────────

const peaks = [
	{
		name: "Mont Blanc",
		elevation: "4,808 m",
		location: "France / Italy",
		desc: "The highest peak in the Alps and in all of Europe outside the Caucasus. Its massive glaciated dome dominates the horizon above Chamonix.",
		img: "https://images.unsplash.com/photo-1542359259-a9629e6282ae?auto=format&fit=crop&w=800&q=80",
		wiki: "https://en.wikipedia.org/wiki/Mont_Blanc",
	},
	{
		name: "Matterhorn",
		elevation: "4,478 m",
		location: "Switzerland / Italy",
		desc: "Perhaps the most recognisable mountain in the world, its perfect pyramid silhouette looms above the village of Zermatt.",
		img: "https://images.unsplash.com/photo-1516824600626-47a22f465d4b?auto=format&fit=crop&w=800&q=80",
		wiki: "https://en.wikipedia.org/wiki/Matterhorn",
	},
	{
		name: "Dolomites",
		elevation: "3,343 m",
		location: "Italy",
		desc: "A UNESCO World Heritage Site, the pale rose-tinted towers of the Dolomites are a geological and scenic wonder unlike anywhere else.",
		img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
		wiki: "https://en.wikipedia.org/wiki/Dolomites",
	},
	{
		name: "Monte Rosa",
		elevation: "4,634 m",
		location: "Switzerland / Italy",
		desc: "The second highest massif in the Alps, Monte Rosa is a complex of interlinked summits straddling the Swiss–Italian border.",
		img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
		wiki: "https://en.wikipedia.org/wiki/Monte_Rosa",
	},
	{
		name: "Jungfrau",
		elevation: "4,158 m",
		location: "Switzerland",
		desc: "Home to the highest railway station in Europe and a vast glacier plateau, the Jungfrau is the jewel of the Bernese Oberland.",
		img: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=800&q=80",
		wiki: "https://en.wikipedia.org/wiki/Jungfrau",
	},
	{
		name: "Großglockner",
		elevation: "3,798 m",
		location: "Austria",
		desc: "Austria's highest peak, rising majestically in the Hohe Tauern National Park, surrounded by the vast Pasterze glacier.",
		img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
		wiki: "https://en.wikipedia.org/wiki/Gro%C3%9Fglockner",
	},
];

function Peaks() {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<section id="peaks" className="py-28 px-4" style={{ backgroundColor: "#f5f5f7" }}>
			<div className="max-w-[980px] mx-auto">
				<div
					ref={ref}
					className={`text-center mb-16 transition-all duration-700 ${
						visible ? "section-visible" : "section-hidden"
					}`}
				>
					<p className="text-[#6e6e73] text-sm font-medium tracking-[0.18em] uppercase mb-4">
						Major summits
					</p>
					<h2
						className="text-[#1d1d1f] font-bold tracking-tight"
						style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
					>
						Six iconic peaks.
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{peaks.map((peak, i) => (
						<PeakCard key={peak.name} peak={peak} delay={i * 80} />
					))}
				</div>
			</div>
		</section>
	);
}

function PeakCard({ peak, delay }: { peak: (typeof peaks)[0]; delay: number }) {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={`bg-white rounded-2xl overflow-hidden transition-all duration-700 ${
				visible ? "section-visible" : "section-hidden"
			}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			<div className="relative overflow-hidden h-52">
				<img
					src={peak.img}
					alt={peak.name}
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
				/>
				<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
				<span className="absolute bottom-3 left-4 text-white/80 text-xs font-medium tracking-widest uppercase">
					{peak.location}
				</span>
			</div>
			<div className="p-6">
				<div className="flex items-start justify-between mb-3">
					<h3 className="text-[#1d1d1f] text-xl font-semibold">{peak.name}</h3>
					<span className="text-[#1d1d1f] font-bold text-sm bg-[#f5f5f7] rounded-full px-3 py-1 ml-2 whitespace-nowrap">
						{peak.elevation}
					</span>
				</div>
				<p className="text-[#6e6e73] text-sm leading-relaxed mb-4">{peak.desc}</p>
				<a
					href={peak.wiki}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1 text-[#0066cc] text-sm font-medium hover:underline"
				>
					Learn more on Wikipedia
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
						<path
							d="M2.5 2.5H9.5V9.5M9.5 2.5L2.5 9.5"
							stroke="currentColor"
							strokeWidth="1.4"
							strokeLinecap="round"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
}

// ─── Feature Spotlight (Matterhorn) ──────────────────────────────────────────

function FeatureSpotlight() {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<section className="bg-[#1d1d1f] overflow-hidden">
			<div
				ref={ref}
				className={`max-w-[980px] mx-auto flex flex-col md:flex-row items-center transition-all duration-700 ${
					visible ? "section-visible" : "section-hidden"
				}`}
			>
				{/* Text side */}
				<div className="flex-1 px-8 py-24 md:px-16">
					<p className="text-[#86868b] text-sm font-medium tracking-[0.18em] uppercase mb-6">
						Symbol of the Alps
					</p>
					<h2
						className="text-white font-bold tracking-tight leading-tight mb-6"
						style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
					>
						The Matterhorn.
						<br />
						<span className="text-[#86868b]">Unmistakable.</span>
					</h2>
					<p className="text-[#86868b] text-lg leading-relaxed mb-8 max-w-sm">
						Rising 4,478 metres above Zermatt, the Matterhorn's near-perfect
						pyramid has been inspiring climbers and dreamers since Edward Whymper's
						first ascent in 1865. It remains one of the most climbed — and
						respected — mountains on Earth.
					</p>
					<div className="flex flex-col sm:flex-row gap-5">
						<a
							href="https://en.wikipedia.org/wiki/Matterhorn"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-[#2997ff] text-[15px] font-medium hover:underline"
						>
							Wikipedia article
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
								<path
									d="M2.5 2.5H9.5V9.5M9.5 2.5L2.5 9.5"
									stroke="currentColor"
									strokeWidth="1.4"
									strokeLinecap="round"
								/>
							</svg>
						</a>
						<a
							href="https://www.zermatt.ch/en/Matterhorn"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-[#2997ff] text-[15px] font-medium hover:underline"
						>
							Zermatt official site
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
								<path
									d="M2.5 2.5H9.5V9.5M9.5 2.5L2.5 9.5"
									stroke="currentColor"
									strokeWidth="1.4"
									strokeLinecap="round"
								/>
							</svg>
						</a>
					</div>
				</div>
				{/* Image side */}
				<div className="flex-1 min-h-[400px] md:min-h-[540px] w-full overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1474221550179-8fed1c87b5c3?auto=format&fit=crop&w=900&q=85"
						alt="Matterhorn reflected in mountain lake"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

// ─── Activities ───────────────────────────────────────────────────────────────

const activities = [
	{
		name: "Skiing",
		tagline: "The world's finest ski terrain.",
		desc: "From Chamonix and Verbier to Cortina d'Ampezzo and St. Moritz, the Alps host thousands of kilometres of groomed pistes, off-piste powder fields, and legendary glacier runs.",
		img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
		link: "https://en.wikipedia.org/wiki/Skiing_in_the_Alps",
	},
	{
		name: "Hiking",
		tagline: "Walk where eagles soar.",
		desc: "The Alps offer over 100,000 km of marked trails, from gentle valley walks to multi-day crossings like the Tour du Mont Blanc and the Via Alpina.",
		img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
		link: "https://en.wikipedia.org/wiki/Hiking",
	},
	{
		name: "Mountaineering",
		tagline: "Test your limits.",
		desc: "The cradle of modern alpinism, the Alps have three of the six grandes courses: the North Face of the Eiger, the Walker Spur on the Grandes Jorasses, and the Matterhorn North Face.",
		img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
		link: "https://en.wikipedia.org/wiki/Mountaineering",
	},
];

function Activities() {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<section id="activities" className="bg-white py-28 px-4">
			<div className="max-w-[980px] mx-auto">
				<div
					ref={ref}
					className={`text-center mb-16 transition-all duration-700 ${
						visible ? "section-visible" : "section-hidden"
					}`}
				>
					<p className="text-[#6e6e73] text-sm font-medium tracking-[0.18em] uppercase mb-4">
						Things to do
					</p>
					<h2
						className="text-[#1d1d1f] font-bold tracking-tight"
						style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
					>
						Choose your adventure.
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{activities.map((act, i) => (
						<ActivityCard key={act.name} activity={act} delay={i * 100} />
					))}
				</div>
			</div>
		</section>
	);
}

function ActivityCard({
	activity,
	delay,
}: {
	activity: (typeof activities)[0];
	delay: number;
}) {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={`rounded-2xl overflow-hidden group transition-all duration-700 ${
				visible ? "section-visible" : "section-hidden"
			}`}
			style={{ transitionDelay: `${delay}ms`, backgroundColor: "#f5f5f7" }}
		>
			<div className="relative overflow-hidden h-60">
				<img
					src={activity.img}
					alt={activity.name}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
			<div className="p-6">
				<h3 className="text-[#1d1d1f] text-2xl font-bold mb-1">{activity.name}</h3>
				<p className="text-[#1d1d1f] text-[15px] font-medium mb-3">{activity.tagline}</p>
				<p className="text-[#6e6e73] text-sm leading-relaxed mb-5">{activity.desc}</p>
				<a
					href={activity.link}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1 text-[#0066cc] text-sm font-medium hover:underline"
				>
					Learn more
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
						<path
							d="M2.5 2.5H9.5V9.5M9.5 2.5L2.5 9.5"
							stroke="currentColor"
							strokeWidth="1.4"
							strokeLinecap="round"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

const galleryPhotos = [
	{
		img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=700&q=80",
		caption: "Bernese Alps, Switzerland",
	},
	{
		img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80",
		caption: "Alpine meadows, Austria",
	},
	{
		img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
		caption: "Lac Blanc, French Alps",
	},
	{
		img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=700&q=80",
		caption: "Panorama, French Alps",
	},
	{
		img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
		caption: "Starlit peaks, Gran Paradiso",
	},
	{
		img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=700&q=80",
		caption: "Winter summit, Eastern Alps",
	},
];

function Gallery() {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<section id="gallery" className="py-28 px-4" style={{ backgroundColor: "#1d1d1f" }}>
			<div className="max-w-[980px] mx-auto">
				<div
					ref={ref}
					className={`text-center mb-14 transition-all duration-700 ${
						visible ? "section-visible" : "section-hidden"
					}`}
				>
					<p className="text-[#86868b] text-sm font-medium tracking-[0.18em] uppercase mb-4">
						Gallery
					</p>
					<h2
						className="text-white font-bold tracking-tight"
						style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
					>
						See the Alps.
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{galleryPhotos.map((photo, i) => (
						<GalleryItem key={i} photo={photo} delay={i * 70} />
					))}
				</div>
			</div>
		</section>
	);
}

function GalleryItem({
	photo,
	delay,
}: {
	photo: (typeof galleryPhotos)[0];
	delay: number;
}) {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={`relative rounded-2xl overflow-hidden group aspect-[4/3] transition-all duration-700 ${
				visible ? "section-visible" : "section-hidden"
			}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			<img
				src={photo.img}
				alt={photo.caption}
				className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
				<p className="text-white text-sm font-medium">{photo.caption}</p>
			</div>
		</div>
	);
}

// ─── Flora & Fauna ────────────────────────────────────────────────────────────

const flora = [
	{
		name: "Edelweiss",
		sci: "Leontopodium alpinum",
		desc: "The iconic alpine flower, symbolising courage and purity. Its woolly white bracts protect it from UV radiation at altitude.",
		emoji: "🌼",
	},
	{
		name: "Alpine Gentian",
		sci: "Gentiana alpina",
		desc: "One of Europe's most vivid blue flowers, found on rocky siliceous soils above 2,000 m.",
		emoji: "💙",
	},
	{
		name: "Arolla Pine",
		sci: "Pinus cembra",
		desc: "A five-needled pine that forms the treeline in many parts of the Alps, its seeds dispersed almost exclusively by the nutcracker bird.",
		emoji: "🌲",
	},
];

const fauna = [
	{
		name: "Alpine Ibex",
		sci: "Capra ibex",
		desc: "Once hunted nearly to extinction, the ibex was successfully reintroduced across the Alps and now numbers over 50,000.",
		emoji: "🐐",
	},
	{
		name: "Chamois",
		sci: "Rupicapra rupicapra",
		desc: "The acrobatic mountain antelope that can sprint up 50° slopes, is the symbol of agile alpine life.",
		emoji: "🦌",
	},
	{
		name: "Golden Eagle",
		sci: "Aquila chrysaetos",
		desc: "With wingspans up to 2.3 m, the golden eagle soars above alpine ridges hunting marmots and hares.",
		emoji: "🦅",
	},
];

function FloraFauna() {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<section id="nature" className="bg-white py-28 px-4">
			<div className="max-w-[980px] mx-auto">
				<div
					ref={ref}
					className={`text-center mb-16 transition-all duration-700 ${
						visible ? "section-visible" : "section-hidden"
					}`}
				>
					<p className="text-[#6e6e73] text-sm font-medium tracking-[0.18em] uppercase mb-4">
						Natural world
					</p>
					<h2
						className="text-[#1d1d1f] font-bold tracking-tight"
						style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
					>
						Flora &amp; Fauna.
					</h2>
					<p className="text-[#6e6e73] text-xl mt-4 max-w-lg mx-auto">
						The Alps harbour extraordinary biodiversity — over 13,000 plant species
						and thousands of endemic animals.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{/* Flora */}
					<div>
						<h3 className="text-[#1d1d1f] text-xl font-semibold mb-6 pb-3 border-b border-[#d2d2d7]">
							Flora
						</h3>
						<div className="space-y-6">
							{flora.map((f) => (
								<NatureCard key={f.name} item={f} />
							))}
						</div>
					</div>
					{/* Fauna */}
					<div>
						<h3 className="text-[#1d1d1f] text-xl font-semibold mb-6 pb-3 border-b border-[#d2d2d7]">
							Fauna
						</h3>
						<div className="space-y-6">
							{fauna.map((f) => (
								<NatureCard key={f.name} item={f} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function NatureCard({ item }: { item: (typeof flora)[0] }) {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();
	return (
		<div
			ref={ref}
			className={`flex gap-4 transition-all duration-700 ${
				visible ? "section-visible" : "section-hidden"
			}`}
		>
			<span className="text-3xl leading-none mt-1 select-none" aria-hidden="true">
				{item.emoji}
			</span>
			<div>
				<p className="text-[#1d1d1f] font-semibold text-[15px]">{item.name}</p>
				<p className="text-[#6e6e73] text-xs italic mb-1">{item.sci}</p>
				<p className="text-[#6e6e73] text-sm leading-relaxed">{item.desc}</p>
			</div>
		</div>
	);
}

// ─── Fun Facts ────────────────────────────────────────────────────────────────

const facts = [
	{ value: "4,808 m", label: "Height of Mont Blanc", sub: "Highest point in the Alps" },
	{ value: "1,200+", label: "Glaciers", sub: "Covering ~2,100 km²" },
	{ value: "30,000+", label: "km of trails", sub: "Marked hiking routes" },
	{ value: "700 M", label: "Years old", sub: "Age of Alpine rock formations" },
	{ value: "120+", label: "Ski resorts", sub: "Across 8 countries" },
	{ value: "UNESCO", label: "World Heritage", sub: "Dolomites since 2009" },
];

function FunFacts() {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<section id="facts" className="py-28 px-4" style={{ backgroundColor: "#f5f5f7" }}>
			<div className="max-w-[980px] mx-auto">
				<div
					ref={ref}
					className={`text-center mb-16 transition-all duration-700 ${
						visible ? "section-visible" : "section-hidden"
					}`}
				>
					<p className="text-[#6e6e73] text-sm font-medium tracking-[0.18em] uppercase mb-4">
						Did you know?
					</p>
					<h2
						className="text-[#1d1d1f] font-bold tracking-tight"
						style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
					>
						Alpine facts.
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{facts.map((fact, i) => (
						<FactCard key={fact.label} fact={fact} delay={i * 80} />
					))}
				</div>
			</div>
		</section>
	);
}

function FactCard({ fact, delay }: { fact: (typeof facts)[0]; delay: number }) {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={`bg-white rounded-2xl p-8 transition-all duration-700 ${
				visible ? "section-visible" : "section-hidden"
			}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			<p
				className="text-[#1d1d1f] font-bold mb-2 leading-none"
				style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
			>
				{fact.value}
			</p>
			<p className="text-[#1d1d1f] text-[15px] font-semibold mb-1">{fact.label}</p>
			<p className="text-[#6e6e73] text-sm">{fact.sub}</p>
		</div>
	);
}

// ─── Resources ────────────────────────────────────────────────────────────────

const externalResources = [
	{
		title: "Wikipedia: The Alps",
		desc: "Comprehensive encyclopaedia article covering geography, geology, history, culture, and ecology.",
		href: "https://en.wikipedia.org/wiki/Alps",
		category: "Encyclopaedia",
	},
	{
		title: "Club Alpino Italiano",
		desc: "Italy's oldest alpine club, founded in 1863. Manages huts, trails, and mountaineering courses across the Italian Alps.",
		href: "https://www.cai.it",
		category: "Mountain Club",
	},
	{
		title: "UNESCO Dolomites",
		desc: "Official UNESCO World Heritage site page for the Dolomites, with conservation status, maps, and scientific literature.",
		href: "https://whc.unesco.org/en/list/1237/",
		category: "Heritage",
	},
	{
		title: "Swiss Alpine Club (SAC)",
		desc: "Switzerland's main alpine organisation, offering hut booking, route databases, and weather forecasts.",
		href: "https://www.sac-cas.ch/en/",
		category: "Mountain Club",
	},
	{
		title: "Chamonix Mont-Blanc",
		desc: "Official tourism site for the Chamonix valley, Mont Blanc's base camp and the birthplace of alpinism.",
		href: "https://www.chamonix.com/",
		category: "Tourism",
	},
	{
		title: "Alpenverein (DAV)",
		desc: "The German Alpine Club is Europe's largest outdoor sports association, with over 1.4 million members.",
		href: "https://www.alpenverein.de/",
		category: "Mountain Club",
	},
];

function Resources() {
	const { ref, visible } = useScrollReveal<HTMLDivElement>();

	return (
		<section id="resources" className="bg-white py-28 px-4">
			<div className="max-w-[980px] mx-auto">
				<div
					ref={ref}
					className={`text-center mb-16 transition-all duration-700 ${
						visible ? "section-visible" : "section-hidden"
					}`}
				>
					<p className="text-[#6e6e73] text-sm font-medium tracking-[0.18em] uppercase mb-4">
						Go further
					</p>
					<h2
						className="text-[#1d1d1f] font-bold tracking-tight"
						style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
					>
						Resources &amp; links.
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{externalResources.map((res, i) => (
						<ResourceCard key={res.title} resource={res} delay={i * 80} />
					))}
				</div>
			</div>
		</section>
	);
}

function ResourceCard({
	resource,
	delay,
}: {
	resource: (typeof externalResources)[0];
	delay: number;
}) {
	const { ref, visible } = useScrollReveal<HTMLAnchorElement>();

	return (
		<a
			ref={ref}
			href={resource.href}
			target="_blank"
			rel="noopener noreferrer"
			className={`block rounded-2xl p-7 border border-[#d2d2d7] hover:border-[#a1a1a6] hover:shadow-md transition-all duration-300 group ${
				visible ? "section-visible" : "section-hidden"
			}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			<span
				className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mb-4"
				style={{ backgroundColor: "#f5f5f7", color: "#6e6e73" }}
			>
				{resource.category}
			</span>
			<h3 className="text-[#1d1d1f] font-semibold text-[15px] mb-2 flex items-center gap-1">
				{resource.title}
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					className="opacity-0 group-hover:opacity-100 transition-opacity ml-1"
					aria-hidden="true"
				>
					<path
						d="M2.5 2.5H9.5V9.5M9.5 2.5L2.5 9.5"
						stroke="#0066cc"
						strokeWidth="1.4"
						strokeLinecap="round"
					/>
				</svg>
			</h3>
			<p className="text-[#6e6e73] text-sm leading-relaxed">{resource.desc}</p>
		</a>
	);
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const footerColumns = [
	{
		heading: "Explore",
		links: [
			{ label: "About the Alps", href: "#discover" },
			{ label: "Major Peaks", href: "#peaks" },
			{ label: "Activities", href: "#activities" },
			{ label: "Gallery", href: "#gallery" },
		],
	},
	{
		heading: "Nature",
		links: [
			{ label: "Flora", href: "#nature" },
			{ label: "Fauna", href: "#nature" },
			{
				label: "Glaciers",
				href: "https://en.wikipedia.org/wiki/Alpine_glaciers",
			},
			{
				label: "National Parks",
				href: "https://en.wikipedia.org/wiki/Gran_Paradiso_National_Park",
			},
		],
	},
	{
		heading: "Resources",
		links: [
			{ label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Alps" },
			{ label: "UNESCO Dolomites", href: "https://whc.unesco.org/en/list/1237/" },
			{ label: "Swiss Alpine Club", href: "https://www.sac-cas.ch/en/" },
			{ label: "Chamonix Tourism", href: "https://www.chamonix.com/" },
		],
	},
	{
		heading: "Countries",
		links: [
			{ label: "Switzerland", href: "https://en.wikipedia.org/wiki/Switzerland" },
			{ label: "Austria", href: "https://en.wikipedia.org/wiki/Austria" },
			{ label: "France", href: "https://en.wikipedia.org/wiki/French_Alps" },
			{ label: "Italy", href: "https://en.wikipedia.org/wiki/Italian_Alps" },
		],
	},
];

function Footer() {
	return (
		<footer className="pt-16 pb-8 px-4" style={{ backgroundColor: "#f5f5f7" }}>
			<div className="max-w-[980px] mx-auto">
				<div className="border-t border-[#d2d2d7] mb-10" />

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
					{footerColumns.map((col) => (
						<div key={col.heading}>
							<p className="text-[#1d1d1f] text-[13px] font-semibold mb-4">
								{col.heading}
							</p>
							<ul className="space-y-2">
								{col.links.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											target={link.href.startsWith("http") ? "_blank" : undefined}
											rel={
												link.href.startsWith("http")
													? "noopener noreferrer"
													: undefined
											}
											className="text-[#6e6e73] text-[13px] hover:text-[#1d1d1f] transition-colors"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="border-t border-[#d2d2d7] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
					<div className="flex items-center gap-2 text-[#1d1d1f] text-[13px] font-semibold">
						<MountainIcon />
						The Alps
					</div>
					<p className="text-[#6e6e73] text-[12px]">
						© {new Date().getFullYear()} The Alps Guide. Images via{" "}
						<a
							href="https://unsplash.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							Unsplash
						</a>
						. Information sourced from Wikipedia and official tourism bodies.
					</p>
				</div>
			</div>
		</footer>
	);
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function Welcome() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Discovery />
				<Peaks />
				<FeatureSpotlight />
				<Activities />
				<Gallery />
				<FloraFauna />
				<FunFacts />
				<Resources />
			</main>
			<Footer />
		</>
	);
}

const resources = [
	{
		href: "https://reactrouter.com/docs",
		text: "React Router Docs",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
			>
				<path
					d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		href: "https://rmx.as/discord",
		text: "Join Discord",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="20"
				viewBox="0 0 24 20"
				fill="none"
				className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
			>
				<path
					d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
];
