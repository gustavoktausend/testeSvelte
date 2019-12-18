<script>
    import { Route } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Jogos from "./pages/Jogos.svelte";
    import Sobre from "./pages/Sobre.svelte";
</script>

<div>
    <Route path="Jogos" component="{Jogos}" />
    <Route path="Sobre" component="{Sobre}" />
    <Route path="/" component="{Home}" />
</div>