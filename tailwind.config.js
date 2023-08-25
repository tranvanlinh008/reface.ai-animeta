// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {
//         colors: {
//             'bg-colors': "#F26161"
//         }
//       },
//     },
//     plugins: [],
//   }

  module.exports = {
    theme: {
      extend: {
        colors: {
          'red-colors': "#F26161",
        },
      }
    }
  }
  module.exports = {
    theme: {
      extend: {
        animation: {
          'bg-scrolling': 'bgScrolling 12s infinite linear',
        },
        keyframes: {
          bgScrolling: {
            '0%': { "background-position-x": "0" },
            '100%': { "background-position-x": "-1550px" },
          }
        }
      },
    },
    plugins: [],
  }
  