import { defineConfig } from 'astro/config';
import deno from "npm:deno-astro-adapter";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno()
});