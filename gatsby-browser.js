/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// const addScript = url => {
//   const script = document.createElement("script")
//   script.src = url
//   script.async = true
//   document.body.appendChild(script)
// }

// import "bootstrap/dist/css/bootstrap.min.css"

export const onClientEntry = () => {
  window.onload = () => {
    // addScript("https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0")
  }
}
