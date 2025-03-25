const socialIcons = {
  Github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6"><path fill="currentColor" d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"></path></svg>`,
  Facebook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
    ></path>
  </svg>`,
  Instagram: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
  </svg>`,
  LinkedIn: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Logo-Linkedin--Streamline-Pixel"><desc>Logo Linkedin Streamline Icon: https://streamlinehq.com</desc><title>logo-linkedin</title><g><path d="M30.47 3.05H32v25.9h-1.53Z"  stroke-width="1"></path><path d="M28.95 28.95h1.52v1.53h-1.52Z"  stroke-width="1"></path><path d="M28.95 1.52h1.52v1.53h-1.52Z"  stroke-width="1"></path><path d="M27.42 4.57h1.53v22.86h-1.53Z"  stroke-width="1"></path><path d="M3.04 30.48h25.91V32H3.04Z"  stroke-width="1"></path><path d="M4.57 27.43h22.85v1.52H4.57Z"  stroke-width="1"></path><path d="m22.85 15.24 -1.52 0 0 -1.53 -3.05 0 0 1.53 -1.52 0 0 -1.53 -3.05 0 0 9.15 3.05 0 0 -4.57 1.52 0 0 -1.53 1.53 0 0 1.53 1.52 0 0 4.57 3.05 0 0 -6.1 -1.53 0 0 -1.52z"  stroke-width="1"></path><path d="M7.61 13.71h3.05v9.15H7.61Z"  stroke-width="1"></path><path d="M7.61 9.14h3.05v3.05H7.61Z"  stroke-width="1"></path><path d="M4.57 3.05h22.85v1.52H4.57Z"  stroke-width="1"></path><path d="M3.04 0h25.91v1.52H3.04Z"  stroke-width="1"></path><path d="M3.04 4.57h1.53v22.86H3.04Z"  stroke-width="1"></path><path d="M1.52 28.95h1.52v1.53H1.52Z"  stroke-width="1"></path><path d="M1.52 1.52h1.52v1.53H1.52Z"  stroke-width="1"></path><path d="M0 3.05h1.52v25.9H0Z"  stroke-width="1"></path></g></svg>`,
  Mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Email-Mail-Open-Address--Streamline-Pixel"><desc>Email Mail Open Address Streamline Icon: https://streamlinehq.com</desc><title>email-mail-open-address</title><g><path d="m30.48 12.19 0 -1.52 -1.53 0 0 -1.53 -1.52 0 0 -3.04 -1.52 0 0 12.19 1.52 0 0 -1.53 1.52 0 0 -1.52 1.53 0 0 13.71 1.52 0 0 -16.76 -1.52 0z" fill="currentColor" stroke-width="1"></path><path d="M28.95 28.95h1.53v1.53h-1.53Z" fill="currentColor" stroke-width="1"></path><path d="M3.05 30.48h25.9V32H3.05Z" fill="currentColor" stroke-width="1"></path><path d="M24.38 18.29h1.53v1.52h-1.53Z" fill="currentColor" stroke-width="1"></path><path d="M22.86 25.91h1.52v1.52h-1.52Z" fill="currentColor" stroke-width="1"></path><path d="M22.86 19.81h1.52v1.52h-1.52Z" fill="currentColor" stroke-width="1"></path><path d="M21.33 24.38h1.53v1.53h-1.53Z" fill="currentColor" stroke-width="1"></path><path d="M21.33 21.33h1.53v1.53h-1.53Z" fill="currentColor" stroke-width="1"></path><path d="M21.33 10.67h1.53v4.57h-1.53Z" fill="currentColor" stroke-width="1"></path><path d="M19.81 9.14h1.52v1.53h-1.52Z" fill="currentColor" stroke-width="1"></path><path d="M10.67 22.86h10.66v1.52H10.67Z" fill="currentColor" stroke-width="1"></path><path d="M18.29 15.24h3.04v1.52h-3.04Z" fill="currentColor" stroke-width="1"></path><path d="m18.29 10.67 -4.57 0 0 1.52 3.04 0 0 3.05 1.53 0 0 -4.57z" fill="currentColor" stroke-width="1"></path><path d="M13.72 15.24h3.04v1.52h-3.04Z" fill="currentColor" stroke-width="1"></path><path d="M12.19 7.62h7.62v1.52h-7.62Z" fill="currentColor" stroke-width="1"></path><path d="M12.19 18.29h7.62v1.52h-7.62Z" fill="currentColor" stroke-width="1"></path><path d="M12.19 12.19h1.53v3.05h-1.53Z" fill="currentColor" stroke-width="1"></path><path d="M10.67 16.76h1.52v1.53h-1.52Z" fill="currentColor" stroke-width="1"></path><path d="M10.67 9.14h1.52v1.53h-1.52Z" fill="currentColor" stroke-width="1"></path><path d="M9.14 24.38h1.53v1.53H9.14Z" fill="currentColor" stroke-width="1"></path><path d="M9.14 21.33h1.53v1.53H9.14Z" fill="currentColor" stroke-width="1"></path><path d="M9.14 10.67h1.53v6.09H9.14Z" fill="currentColor" stroke-width="1"></path><path d="M7.62 25.91h1.52v1.52H7.62Z" fill="currentColor" stroke-width="1"></path><path d="M7.62 19.81h1.52v1.52H7.62Z" fill="currentColor" stroke-width="1"></path><path d="m25.91 6.1 0 -1.53 -3.05 0 0 -1.52 -1.53 0 0 -1.53 -1.52 0 0 -1.52 -7.62 0 0 1.52 -1.52 0 0 1.53 -1.53 0 0 1.52 -3.04 0 0 1.53 19.81 0z" fill="currentColor" stroke-width="1"></path><path d="M6.1 18.29h1.52v1.52H6.1Z" fill="currentColor" stroke-width="1"></path><path d="M1.52 28.95h1.53v1.53H1.52Z" fill="currentColor" stroke-width="1"></path><path d="m1.52 15.24 1.53 0 0 1.52 1.52 0 0 1.53 1.53 0 0 -12.19 -1.53 0 0 3.04 -1.52 0 0 1.53 -1.53 0 0 1.52 -1.52 0 0 16.76 1.52 0 0 -13.71z" fill="currentColor" stroke-width="1"></path></g></svg>`,
  X: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>`,
  Twitch: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>`,
  YouTube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Logo-Social-Media-Youtube-Circle--Streamline-Pixel"><desc>Logo Social Media Youtube Circle Streamline Icon: https://streamlinehq.com</desc><title>logo-social-media-youtube-circle</title><path d="M30.47 9.14h-1.52V6.09h-1.53V4.57H25.9V3.05h-3.05V1.52h-3.04V0h-7.62v1.52H9.14v1.53H6.09v1.52H4.57v1.52H3.04v3.05H1.52v3.05H0v7.62h1.52v3.05h1.52v3.04h1.53v1.53h1.52v1.52h3.05v1.53h3.05V32h7.62v-1.52h3.04v-1.53h3.05v-1.52h1.52V25.9h1.53v-3.04h1.52v-3.05H32v-7.62h-1.53Zm-7.62 7.62h-1.52v1.53h-1.52v1.52h-1.53v1.52h-1.52v1.53h-3.05v1.52h-1.52V7.62h1.52v1.52h3.05v1.53h1.52v1.52h1.53v1.52h1.52v1.53h1.52Z" fill="currentColor" stroke-width="1"></path></svg>`,
  WhatsApp: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
    </svg>`,
  Snapchat: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118zm-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118"></path>
    </svg>`,
  Pinterest: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="8" y1="20" x2="12" y2="11"></line>
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </svg>`,
  TikTok: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>`,
  CodePen: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <line x1="3" y1="9" x2="3" y2="15"></line>
      <line x1="21" y1="9" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="9"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
    </svg>`,
  Discord: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
      <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
      <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
    </svg>`,
  GitLab: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path>
    </svg>`,
  Reddit: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"></path>
      <path d="M12 8l1 -5l6 1"></path>
      <circle cx="19" cy="4" r="1"></circle>
      <circle cx="9" cy="13" r=".5" fill="currentColor"></circle>
      <circle cx="15" cy="13" r=".5" fill="currentColor"></circle>
      <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"></path>
    </svg>`,
  Skype: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1 -5.953 5.953a9 9 0 0 1 -11.253 -11.253a4.5 4.5 0 0 1 5.953 -5.954a8.987 8.987 0 0 1 2.65 -.396z"></path>
      <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4 -1.187 4 -2.5c0 -1.503 -1.927 -2.5 -4 -2.5s-4 -.997 -4 -2.5c0 -1.313 1.095 -2.5 4 -2.5c1.642 0 3.5 .5 4 2.5"></path>
    </svg>`,
  Steam: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z"></path>
      <circle fill="currentColor" cx="16.5" cy="9.5" r="1"></circle>
    </svg>`,
  Telegram: `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-tabler"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
      </svg>`,
  Mastodon: `<svg class="icon-tabler" viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <path fill="currentColor"
  d="M499 112q-93 1 -166 11q-81 11 -128 33l-14 8q-16 10 -32 25q-22 21 -38 47q-21 33 -32 73q-14 47 -14 103v37q0 77 1 119q3 113 18 188q19 95 62 154q50 67 134 89q109 29 210 24q46 -3 88 -12q30 -7 55 -17l19 -8l-4 -75l-22 6q-28 6 -57 10q-41 6 -78 4q-53 -1 -80 -7
  q-43 -8 -67 -30q-29 -25 -35 -72q-2 -14 -2 -29l25 6q31 6 65 10q48 7 93 9q42 2 92 -2q32 -2 88 -9t107 -30q49 -23 81.5 -54.5t38.5 -63.5q9 -45 13 -109q4 -46 5 -97v-41q0 -56 -14 -103q-11 -40 -32 -73q-16 -26 -38 -47q-15 -15 -32 -25q-12 -8 -14 -8
  q-46 -22 -127 -33q-74 -10 -166 -11h-3zM367 267q73 0 109 56l24 39l24 -39q36 -56 109 -56q63 0 101 43t38 117v239h-95v-232q0 -74 -61 -74q-69 0 -69 88v127h-94v-127q0 -88 -69 -88q-61 0 -61 74v232h-95v-239q0 -74 38 -117t101 -43z" />
  </svg>`,
};

export default socialIcons;
