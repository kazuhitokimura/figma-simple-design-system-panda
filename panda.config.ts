import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          slate: {
            100: { value: '#f2f2f2' },
            200: { value: '#e3e3e3' },
            300: { value: '#cdcdcd' },
            400: { value: '#b1b1b1' },
            500: { value: '#939393' },
            600: { value: '#767676' },
            700: { value: '#5a5a5a' },
            800: { value: '#424242' },
            900: { value: '#303030' },
            1000: { value: '#242424' }
          },
          white: {
            100: { value: 'rgba(255, 255, 255, 0.05)' },
            200: { value: 'rgba(255, 255, 255, 0.1)' },
            300: { value: 'rgba(255, 255, 255, 0.2)' },
            400: { value: 'rgba(255, 255, 255, 0.4)' },
            500: { value: 'rgba(255, 255, 255, 0.7)' },
            600: { value: 'rgba(255, 255, 255, 0.8)' },
            700: { value: 'rgba(255, 255, 255, 0.85)' },
            800: { value: 'rgba(255, 255, 255, 0.9)' },
            900: { value: 'rgba(255, 255, 255, 0.95)' },
            1000: { value: '#ffffff' }
          },
          brand: {
            100: { value: '#f5f5f5' },
            200: { value: '#e6e6e6' },
            300: { value: '#d9d9d9' },
            400: { value: '#b3b3b3' },
            500: { value: '#757575' },
            600: { value: '#444444' },
            700: { value: '#383838' },
            800: { value: '#2c2c2c' },
            900: { value: '#1e1e1e' },
            1000: { value: '#111111' }
          },
          red: {
            100: { value: '#fde8e7' },
            200: { value: '#fdd3d0' },
            300: { value: '#fcb9b4' },
            400: { value: '#f4766a' },
            500: { value: '#ec2217' },
            600: { value: '#c00f0c' },
            700: { value: '#900b09' },
            800: { value: '#690806' },
            900: { value: '#4d0604' },
            1000: { value: '#300302' }
          },
          yellow: {
            100: { value: '#fffceb' },
            200: { value: '#fff1c2' },
            300: { value: '#ffe8a3' },
            400: { value: '#e8b931' },
            500: { value: '#e6a100' },
            600: { value: '#bf8500' },
            700: { value: '#976800' },
            800: { value: '#684800' },
            900: { value: '#523800' },
            1000: { value: '#402900' }
          },
          green: {
            100: { value: '#ebffef' },
            200: { value: '#d0f7d8' },
            300: { value: '#b0f4c0' },
            400: { value: '#85e09c' },
            500: { value: '#14ae5c' },
            600: { value: '#009951' },
            700: { value: '#008043' },
            800: { value: '#005c2d' },
            900: { value: '#004723' },
            1000: { value: '#002d16' }
          },
          black: {
            100: { value: 'rgba(12, 12, 13, 0.05)' },
            200: { value: 'rgba(12, 12, 13, 0.1)' },
            300: { value: 'rgba(12, 12, 13, 0.2)' },
            400: { value: 'rgba(12, 12, 13, 0.4)' },
            500: { value: 'rgba(12, 12, 13, 0.7)' },
            600: { value: 'rgba(12, 12, 13, 0.8)' },
            700: { value: 'rgba(12, 12, 13, 0.85)' },
            800: { value: 'rgba(12, 12, 13, 0.9)' },
            900: { value: 'rgba(12, 12, 13, 0.95)' },
            1000: { value: '#0c0c0d' }
          },
          pink: {
            100: { value: '#fcf1fc' },
            200: { value: '#fae1fa' },
            300: { value: '#f5c0f5' },
            400: { value: '#f19edc' },
            500: { value: '#ea3fb8' },
            600: { value: '#d732a8' },
            700: { value: '#ba2a92' },
            800: { value: '#8a226b' },
            900: { value: '#57184b' },
            1000: { value: '#3f1536' }
          },
          gray: {
            100: { value: '#f5f5f5' },
            200: { value: '#e6e6e6' },
            300: { value: '#d9d9d9' },
            400: { value: '#b3b3b3' },
            500: { value: '#757575' },
            600: { value: '#444444' },
            700: { value: '#383838' },
            800: { value: '#2c2c2c' },
            900: { value: '#1e1e1e' },
            1000: { value: '#111111' }
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
