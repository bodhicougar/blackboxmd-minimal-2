/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onInitialClientRender = () => {
  if (
    'onGatsbyInitialClientRender' in window &&
    typeof window.onGatsbyInitialClientRender === 'function'
  ) {
    window.onGatsbyInitialClientRender();
  }
};

exports.onRouteUpdate = () => {
  if (
    'onGatsbyRouteUpdate' in window &&
    typeof window.onGatsbyRouteUpdate === 'function'
  ) {
    window.onGatsbyRouteUpdate();
  }
};

// export const onServiceWorkerUpdateReady = () => {
//   const answer = window.confirm(
//     `This application has been updated. ` +
//       `Reload to display the latest version?`
//   );

//   if (answer === true) {
//     window.location.reload();
//   }
// };
// import 'lazysizes';
