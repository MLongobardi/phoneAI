<script>
    import { filterSortStore } from '$lib/stores/stores.js';
    import { onMount } from 'svelte';

    let sortBy = 'Price';
    let sortOrder = 'asc';
    let priceRange = { min: 0, max: 2000 };
    let ratingRange = { min: 2.20, max: 5.00 };

    const updateStore = () => {
        filterSortStore.set({
            sortBy,
            sortOrder,
            priceRange,
            ratingRange
        });
    };

    onMount(() => {
        // Update the store with initial values when component mounts
        updateStore();
    });
</script>

<aside class="sidebar">
    <h2>Filters & Sorting</h2>

    <!-- Sorting Controls -->
    <section class="sorting">
        <label for="sortBy">Sort By:</label>
        <select id="sortBy" bind:value={sortBy} on:change={updateStore}>
            <option value="Price">Price</option>
            <option value="Rating">Rating</option>
            <option value="Release Date">Release Date</option>
        </select>

        <label for="sortOrder">Order:</label>
        <select id="sortOrder" bind:value={sortOrder} on:change={updateStore}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    </section>

    <!-- Price Range Filter -->
    <section class="price-filter">
        <label for="priceRange">Price Range: ${priceRange.min} - ${priceRange.max}</label>
        <input type="range" id="priceRange" min="0" max="2000" step="1" bind:value={priceRange.min} on:input={updateStore}>
        <input type="range" id="priceRange" min="0" max="2000" step="1" bind:value={priceRange.max} on:input={updateStore}>
    </section>

    <!-- Rating Range Filter -->
    <section class="rating-filter">
        <label for="ratingRange">Rating Range: {ratingRange.min} - {ratingRange.max}</label>
        <input type="range" id="ratingRange" min="2.20" max="5.00" step="0.01" bind:value={ratingRange.min} on:input={updateStore}>
        <input type="range" id="ratingRange" min="2.20" max="5.00" step="0.01" bind:value={ratingRange.max} on:input={updateStore}>
    </section>
</aside>

<style>
    .sidebar {
        width: 300px;
        padding: 20px;
        background-color: #f4f4f4;
        border-right: 2px solid #ddd;
    }

    .sorting, .price-filter, .rating-filter {
        margin-bottom: 20px;
    }

    select, input {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
    }

    label {
        font-weight: bold;
    }
</style>
