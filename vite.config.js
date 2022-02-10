import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = require("dotenv").config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/" + process.env.GIT_REPO  + "/",
})