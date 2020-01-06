<script>
    import { Route } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Sobre from "./pages/Sobre.svelte";
    import JogosInfo from "./pages/JogoInfo.svelte";
    import JogoRegras from "./pages/JogoRegras.svelte";
    import { _ } from 'svelte-i18n';

    import pt_BR from '../../messages/pt-BR';
    import en_US from '../../messages/en-US';
    let bundles = [pt_BR.page.url, en_US.page.url];

</script>

<div class="container-fluid">
    {#each bundles as bundle}
        <Route path="{bundle.nav.game}/:nome" component="{JogosInfo}"  />
        <Route path="{bundle.nav.game}/:nome/{bundle.nav.rules}" component="{JogoRegras}" />
        <Route path="{bundle.nav.about}" component="{Sobre}" />
        <Route path="/" component="{Home}" />
    {/each}
</div>
<!--    {$_('page.jogos.title')}-->
<!--to="/{$_(`page.url.${jogo.nome}`)}"-->