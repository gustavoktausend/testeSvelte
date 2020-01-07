<script>
	import { Router } from "svelte-routing";
	import Nav from "./components/Nav.svelte";
	import MJRoutes from "./routes/MJRoutes.svelte"
	import {locale} from 'svelte-i18n';
	import axios from "axios";
	export let url = "";

	const getUtil = async(locale) => {
		try {
			const response = await axios.get(`http://localhost:8082/util/${locale}`);
			return response.data;
		} catch (e) {
			console.error(e);
		}
	}

	$: meta = getUtil($locale);



</script>


<svelte:head>
	{#await meta then value}
		<title>{value.page_title}</title>
		<meta name="description" content="{value.meta_description}">
	{/await}
</svelte:head>

<Router url="{url}">
	<Nav />
	<MJRoutes />
</Router>

