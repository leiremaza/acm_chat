import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

const env = require("dotenv").config();
console.log(process.env)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/" + "acm_chat"  + "/",
})