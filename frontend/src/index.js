/**
 * @author Dhruvil Patel
 * @description Application Root. This is the first thing that the code executes
 * @version 0.0.1
 * Created 01/14/18
 */
/***************************************************************IMPORTS***************************************************************/
import React from "react"; // Required react dependencies
import ReactDOM from "react-dom"; // Required react dependencies
import App from "./App"; // Default app and component to be rendered
import { defaults } from "./Defaults"; // The standard list of strings that we will be using throughout the application
import "bootstrap/dist/css/bootstrap.min.css"; // Boostrap import
/***************************************************************IMPORTS***************************************************************/

/*****************************************************************APP*****************************************************************/
/**
 * Application entry point. Here we render the standard root components that are standard to all pages in the website
 * 
 * @param {boolean} worker Toggle the default react service worker.
 *      We default this to false because enabling the service worker brings with it application caching, which causes production
 *      issues during version updates. If you would like to know about this issue in depth, read through the react documentation.
 */
function main(worker) {
    // Render the default title
    ReactDOM.render(defaults.title, document.getElementById("title"))
    // Render the default root object
    ReactDOM.render(<App />, document.getElementById("root"));
}
main(false)
/*****************************************************************APP*****************************************************************/