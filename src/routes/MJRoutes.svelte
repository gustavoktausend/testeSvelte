<script>
    import { Route } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Sobre from "./pages/Sobre.svelte";
    import JogosInfo from "./pages/JogoInfo.svelte";
    import JogoRegras from "./pages/JogoRegras.svelte";
    import { _, locale } from 'svelte-i18n';
    import axios from "axios";

    const getNavRoutes = async (locale) => {
        try {
            const response = await axios.get(`http://localhost:8082/navegation/${locale}`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    };

    $: navBundle = getNavRoutes($locale);

</script>

<div class="container-fluid">
    <Route path="/" component="{Home}" />
    {#await navBundle then value}
        <Route path="/:nome" component="{JogosInfo}"  />
        <Route path="/:nome/{value.rules}" component="{JogoRegras}" />
        <Route path="{value.about.toLowerCase()}" component="{Sobre}" />

    {/await}
</div>