<!-- src/lib/components/Header.svelte -->

<script>
	// No additional logic required here, just rendering the header with navigation
</script>

<header>
	<h1>PhoneAI</h1>

	<!-- Navigation Bar -->
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="mailto:contact@phoneai.com">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		background-color: #2c3e50;
		padding: 16px 0;
		text-align: center;
		color: white;
		font-family: 'Helvetica Neue', sans-serif;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0;
		text-transform: uppercase;
	}

	/* Styling for the navigation */
	nav {
		margin-top: 12px;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	nav li {
		margin: 0 16px;
	}

	nav a {
		text-decoration: none;
		color: white;
		font-size: 1.1rem;
		font-weight: 500;
		transition: color 0.3s ease;
	}

	nav a:hover {
		color: #3498db; /* Change link color on hover */
	}

	/* Make the header and nav responsive */
	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		nav ul {
			flex-direction: column; /* Stack the navigation links vertically on small screens */
		}

		nav li {
			margin: 8px 0; /* Add spacing between the vertical links */
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 1.5rem;
		}
	}
</style>
