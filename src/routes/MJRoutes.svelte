<script>
    import { Route } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Jogos from "./pages/Jogos.svelte";
    import Sobre from "./pages/Sobre.svelte";
    import JogosInfo from "./pages/JogoInfo.svelte";
    import JogoRegras from "./pages/JogoRegras.svelte";
    import { _ } from 'svelte-i18n';



</script>

<div class="container-fluid">
    <Route path="jogos" component="{Jogos}" />
    <Route path="jogo/:nome" component="{JogosInfo}"  />
    <Route path="jogo/:nome/regras" component="{JogoRegras}" />
    <Route path="sobre" component="{Sobre}" />
    <Route path="/" component="{Home}" />
</div>
<!--    {$_('page.jogos.title')}-->
<!--to="/{$_(`page.url.${jogo.nome}`)}"-->