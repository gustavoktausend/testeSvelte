<script>
    import { Route } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Jogos from "./pages/Jogos.svelte";
    import Sobre from "./pages/Sobre.svelte";
    import JogosInfo from "./pages/JogoInfo.svelte";
</script>

<div class="container-fluid">
    <Route path="Jogos" component="{Jogos}" />
    <Route path="Jogos/:nome" component="{JogosInfo}"  />
    <Route path="Sobre" component="{Sobre}" />
    <Route path="/" component="{Home}" />
</div>