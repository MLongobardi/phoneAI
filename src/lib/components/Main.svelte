<script>
    import { filterSortStore } from '$lib/stores/stores.js';
    import { page } from '$app/stores';  // Corrected import for page
    import ItemCard from '$lib/components/ItemCard.svelte';  // Import ItemCard

    let phones = $page.data.items; // Correctly accessing the items inside $page.data
    let filteredPhones = [];

    // Subscribe to the store
    $: {
        const { sortBy, sortOrder, priceRange, ratingRange } = $filterSortStore;
        
        // Filter phones based on price range and rating range
        filteredPhones = phones.filter(item => 
            item.Price >= priceRange.min && item.Price <= priceRange.max &&
            item.Rating >= ratingRange.min && item.Rating <= ratingRange.max
        );

        // Sort phones based on selected criteria and order
        if (sortBy === 'Price') {
            filteredPhones.sort((a, b) => sortOrder === 'asc' ? a.Price - b.Price : b.Price - a.Price);
        } else if (sortBy === 'Rating') {
            filteredPhones.sort((a, b) => sortOrder === 'asc' ? a.Rating - b.Rating : b.Rating - a.Rating);
        } else if (sortBy === 'Release Date') {
            filteredPhones.sort((a, b) => sortOrder === 'asc' ? a['Release Date'] - b['Release Date'] : b['Release Date'] - a['Release Date']);
        }
    }
</script>

<main>
    <div class="phone-list">
        {#each filteredPhones as item}
            <ItemCard {item} />
        {/each}
    </div>
</main>

<style>
	.phone-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(300px + 40px), 1fr));  /* Adjusted for padding */
        gap: 20px;
        margin-top: 40px;  /* Adjust top margin */
        margin-bottom: 40px;  /* Adjust bottom margin */
        justify-items: center;  /* Center the items within the grid cells */
    }
	
	main {
		flex-grow: 1;
	}
</style>
