export async function load({ fetch }) {
	try {
		const response = await fetch('/dataset.json');
		if (!response.ok) {
			throw new Error('Failed to fetch dataset.json');
		}
		const data = await response.json();

		// Return the data directly
		return {
			items: data // This will be available in $page.data.items
		};
	} catch (error) {
		console.error('Error fetching dataset:', error);
		return {
			items: [] // Fallback to an empty array if there's an error
		};
	}
}
