export const Location = (locObj) => {
	return `<article class="location-class">
				<ul>
					<li class="fish-details">Country: ${locObj.Location}</li>
					<li class="fish-details">Climate: ${locObj.Climate}</li>
					<li class="fish-details">Language: ${locObj.Language}</li>
					
				</ul>
        	</article>`
}