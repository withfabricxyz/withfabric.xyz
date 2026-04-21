import { Layout } from "nextra-theme-blog";
import { Head } from "nextra/components";
import { ThemePicker } from "../components/ThemePicker";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import "../styles/app.css";

export const metadata = {
	title: "Fabric",
	icons: {
		icon: [
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
		],
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/manifest.json",
	openGraph: {
		images: [{ url: "/og.jpg" }],
	},
	twitter: {
		card: "summary_large_image",
		images: [{ url: "/og.jpg" }],
	},
};

export default async function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Head />
			<body>
				<Layout>
					{children}
					<ThemePicker />
				</Layout>
				<Analytics />
			</body>
		</html>
	);
}
