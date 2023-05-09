import {defineConfig} from "vite";
import resolve from "path";

const root = resolve.resolve(__dirname, "src");
const outDir = resolve.resolve(__dirname, "dist");
export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve.resolve(root, 'index.html'),
                vr_ar: resolve.resolve(root, 'vr-ar/vr-ar.html'),
                hardware: resolve.resolve(root, 'hardware/hardware.html'),
                software: resolve.resolve(root, 'software/software.html'),
                history: resolve.resolve(root, 'history/history.html'),
                nav: resolve.resolve(root, 'assets/html/nav.html'),
                footer: resolve.resolve(root, 'assets/html/footer.html'),
            }
        }
    }

});