<script>
	import { Router } from "svelte-routing";
	import Nav from "./components/Nav.svelte";
	import MJRoutes from "./routes/MJRoutes.svelte"
	export let url = "";
</script>


<svelte:head>
	<title>MegaJogos Online - Jogue Buraco, Tranca, Poker, Truco, Dominó</title>
</svelte:head>

<Router url="{url}">
	<Nav />
	<MJRoutes />
</Router>

