<!-- src/lib/components/Footer.svelte -->

<script>
	// No additional logic required here, just static content for the footer.
</script>

<footer>
	<div class="footer-content">
		<p>&copy; 2024 PhoneAI. All rights reserved.</p>
		<nav>
			<ul>
				<li><a href="/terms">Terms of Service</a></li>
				<li><a href="/privacy-policy">Privacy Policy</a></li>
				<li><a href="mailto:contact@phoneai.com">Contact Us</a></li>
			</ul>
		</nav>
		<p class="disclaimer">Site entirely written by ChatGPT.</p>
		<!-- Disclaimer added -->
	</div>
</footer>

<style>
	footer {
		background-color: #2c3e50; /* Dark background similar to the header */
		color: white;
		padding: 20px 0;
		text-align: center;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	footer p {
		margin: 0;
		font-size: 1rem;
	}

	nav ul {
		list-style-type: none;
		margin: 10px 0 0;
		padding: 0;
		display: flex;
		justify-content: center;
		gap: 20px;
	}

	nav li {
		margin: 0;
	}

	nav a {
		text-decoration: none;
		color: white;
		font-size: 1rem;
		transition: color 0.3s ease;
	}

	nav a:hover {
		color: #3498db; /* Blue on hover */
	}

	/* Styling for the disclaimer */
	.disclaimer {
		margin-top: 10px;
		font-size: 0.8rem;
		color: #bdc3c7; /* Lighter color for the disclaimer */
	}

	@media (max-width: 768px) {
		nav ul {
			flex-direction: column;
			gap: 10px;
		}
	}

	@media (max-width: 480px) {
		footer p {
			font-size: 0.9rem;
		}
	}
</style>
