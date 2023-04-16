// fetch data for every page based od pagination
export default async function getData(page) {
	try {
		const response = await fetch(
			"https://api.punkapi.com/v2/beers?page=" + page + "&per_page=12"
		);
		if (!response.ok) {
			throw new Error("response is not ok");
		}
		const temp = await response.json();
		return temp;
	} catch (error) {
		console.error("There is a problem with fetch operation: ", error);
	}
}

// fetch data for specific element based on id
export async function getBeer(id) {
	try {
		const response = await fetch("https://api.punkapi.com/v2/beers/" + id);
		if (!response.ok) {
			throw new Error("response is not ok");
		}
		const temp = await response.json();
		return temp;
	} catch (error) {
		console.error("There is a problem with fetch operation: ", error);
	}
}
