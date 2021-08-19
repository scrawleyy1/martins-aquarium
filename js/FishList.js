/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish } from "./FishData.js";
import { Fish } from "./Fish.js";

export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList");
    const allFishes = getFish();

    // // Add to the existing HTML in the content element
	let fishHTMLRepresentation = "";
	for (const oneThingFromTheSea of allFishes) {
		fishHTMLRepresentation += Fish(oneThingFromTheSea);
	}
	
    contentElement.innerHTML += `${fishHTMLRepresentation}`
}