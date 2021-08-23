import { getQuotes } from "./QuotesData.js";
import { Quotes } from "./Quotes.js";

export const QuotesList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".QuotesList");
    const allQuotes = getQuotes();

    // // Add to the existing HTML in the content element
	let quotesHTMLRepresentation = "";
	for (const oneThingFromQuotes of allQuotes) {
		quotesHTMLRepresentation += Quotes(oneThingFromQuotes);
	}
	
    contentElement.innerHTML += `${quotesHTMLRepresentation}`
}