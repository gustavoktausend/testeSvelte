<script>
    export let location;
    export let nome;
    export let jogo = location.state;
    import { _ } from 'svelte-i18n'
</script>

<svelte:head>
    <title>{$_(`page.regras.jogo.${jogo.url}.title`)}</title>
    <meta name="description" content="{$_(`page.jogos.jogo.${jogo.url}.description`)}">
    <meta name="keywords" content="jogos, cartas, tabuleiro">
    <meta name="author" content="Gustavo Kring">
</svelte:head>

<div class="container">
    <br>
    <div class="row">
        <div class="col">
            <h2>{$_(`page.regras.jogo.${jogo.url}.title`)}</h2>
        </div>
    </div>
    <div class="row">

        <div class="col">
        <div class="card">
            <div class="card-body">
                {@html $_(`page.regras.jogo.${jogo.url}.description`)}
            </div>
        </div>
    </div>
    </div>
</div>