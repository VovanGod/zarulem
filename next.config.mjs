/** @type {import('next').NextConfig} */
const nextConfig = {
	compress: true,
	poweredByHeader: false,

	images: {
		formats: ["image/webp", "image/avif"],
		minimumCacheTTL: 60,
	},

	experimental: {
		optimizeCss: true,
	},

	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
				],
			},
		];
	},
};

export default nextConfig;
