import emailjs from "@emailjs/browser";
const vpk = import.meta.env.VITE_PUBLIC_KEY_E;

emailjs.init({
  publicKey: vpk,
  // Do not allow headless browsers
  blockHeadless: true,

  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 15000,
  },
});

export { emailjs };
