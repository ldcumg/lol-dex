/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ddragon.leagueoflegends.com",
				pathname: "/**",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
};

export default nextConfig;
