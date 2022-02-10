import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//const env = require("dotenv").config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "https://github.com/leire_maza/acm_chat" //+ env.GIT_USER + "/" + env.GIT_REPO + "/"
  base: "/" + "acm_chat"  + "/",
})