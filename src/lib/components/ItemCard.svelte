<script>
	// Define the prop 'item' to receive the data from the parent component
	export let item = {
		Name: '',
		Description: '',
		Brand: '',
		Price: '',
		'Release Date': '',
		Rating: ''
	};
</script>

<article class="item-card">
	<header>
		<h2>{item.Name}</h2>
	</header>

	<section>
		<p class="brand">
			{item.Brand} <span class="release-date">{item['Release Date']}</span>
		</p>
		<p class="description">{item.Description}</p>
	</section>
	
	<footer>
		<div class="price-rating">
			<p class="rating">Rating: {item.Rating.toFixed(2)} / 5</p>
			<p class="price">${item.Price}</p>
		</div>
	</footer>
</article>

<style>
	.item-card {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 20px;
		width: 300px;
		background-color: #fff;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.item-card:hover {
		transform: translateY(-8px);
	}

	header {
		margin-bottom: 8px;
	}

	h2 {
		font-size: 1.5em;
		margin: 0;
	}

	section {
		margin-bottom: 16px;
	}

	.brand {
		font-size: 1.1em;
		color: #666;
		display: flex;
		align-items: center; /* Vertically align the brand and release date */
	}

	.release-date {
		font-size: 0.9em;
		color: #777;
		margin-left: 8px;
	}

	.description {
		font-size: 1em;
		color: #333;
		line-height: 1.4;
	}

	footer {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.price-rating {
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center; /* Vertically align price and rating */
	}

	.rating {
		font-size: 0.9em;
		color: #777;
		margin-right: 8px;
	}

	.price {
		font-size: 1.2em;
		font-weight: bold;
		color: #e74c3c;
	}
</style>
