import React from "react";

const features = [
	{
		icon: (
			<svg
				className="w-20 h-20 mx-auto mb-6 text-[#00FF9C]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2.5"
				viewBox="0 0 64 64"
			>
				<rect
					x="8"
					y="16"
					width="48"
					height="32"
					rx="6"
					stroke="currentColor"
					strokeWidth="3"
				/>
				<circle cx="20" cy="32" r="6" stroke="currentColor" strokeWidth="3" />
				<rect
					x="36"
					y="26"
					width="16"
					height="12"
					rx="3"
					stroke="currentColor"
					strokeWidth="3"
				/>
				<rect
					x="44"
					y="30"
					width="4"
					height="4"
					rx="2"
					fill="currentColor"
				/>
			</svg>
		),
		title: "01. Learn",
		desc: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.",
	},
	{
		icon: (
			<svg
				className="w-20 h-20 mx-auto mb-6 text-[#00FF9C]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2.5"
				viewBox="0 0 64 64"
			>
				<path
					d="M32 12L54 24L32 36L10 24L32 12Z"
					stroke="currentColor"
					strokeWidth="3"
				/>
				<path d="M32 36V52" stroke="currentColor" strokeWidth="3" />
				<circle cx="32" cy="52" r="2" fill="currentColor" />
			</svg>
		),
		title: "02. Graduate",
		desc: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.",
	},
	{
		icon: (
			<svg
				className="w-20 h-20 mx-auto mb-6 text-[#00FF9C]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2.5"
				viewBox="0 0 64 64"
			>
				<circle cx="20" cy="28" r="8" stroke="currentColor" strokeWidth="3" />
				<rect
					x="32"
					y="20"
					width="20"
					height="16"
					rx="4"
					stroke="currentColor"
					strokeWidth="3"
				/>
				<rect
					x="40"
					y="28"
					width="4"
					height="4"
					rx="2"
					fill="currentColor"
				/>
				<rect
					x="8"
					y="40"
					width="48"
					height="12"
					rx="6"
					stroke="currentColor"
					strokeWidth="3"
				/>
			</svg>
		),
		title: "03. Work",
		desc: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.",
	},
];

export default function WhyLearn() {
	return (
		<section className="bg-[#1B0A4E] text-white py-24">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
					Why learn with our courses?
				</h2>
				<p className="text-center text-[#B6B6C6] mb-16 text-xl font-medium">
					Lorem ipsum dolor sit amet, consectetur.
				</p>
				<div className="grid md:grid-cols-3 gap-10">
					{features.map((f, i) => (
						<div
							key={i}
							className="bg-transparent border border-[#3B2A7B] rounded-2xl p-12 text-center transition hover:shadow-xl"
							style={{ minHeight: 400 }}
						>
							{f.icon}
							<h3 className="font-extrabold text-2xl mb-4 text-white">
								{f.title}
							</h3>
							<p className="text-[#B6B6C6] text-lg">{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
