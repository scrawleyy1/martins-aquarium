import { getLocation } from "./LocationData.js";
import { Location } from "./Location.js";

export const LocationList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".LocationList");
    const allLocation = getLocation();

    // // Add to the existing HTML in the content element
	let locationHTMLRepresentation = "";
	for (const oneThingFromLocation of allLocation) {
		locationHTMLRepresentation += Location(oneThingFromLocation);
	}
	
    contentElement.innerHTML += `${locationHTMLRepresentation}`
}