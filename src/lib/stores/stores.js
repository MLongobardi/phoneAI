import { writable } from 'svelte/store';

// Create the store for filters and sort
export const filterSortStore = writable({
	sortBy: 'Price', // Options: 'Price', 'Rating', 'Release Date'
	sortOrder: 'asc', // Options: 'asc', 'desc'
	priceRange: { min: 0, max: 9999 }, // Updated Price range
	ratingRange: { min: 0, max: 5.0 } // Updated Rating range
});
