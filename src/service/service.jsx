export function data() {
	const src = require('../assets/products.json')
		return src
	}
export function scrollToSearch() {
	var search = document.getElementById("search");
	search.scrollIntoView({
		behavior: "smooth",
		inline: "nearest"});
}