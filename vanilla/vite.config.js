import { defineConfig } from "vite";

export default defineConfig({
	root: ".",
	server: {
		port: 3000,
		open: true,
		strictPort: false,
	},
	build: {
		outDir: "dist",
	},
});
