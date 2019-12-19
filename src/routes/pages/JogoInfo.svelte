<script>
    export let nome;
    export let location;
    export let jogo = location.state;
    import { _ } from 'svelte-i18n'
</script>

<style>
    /*
        By default, CSS is locally scoped to the component,
        and any unused styles are dead-code-eliminated.
        In this page, Svelte can't know which elements are
        going to appear inside the {{{post.html}}} block,
        so we have to use the :global(...) modifier to target
        all elements inside .content
    */
    .content :global(h2) {
        font-size: 1.4em;
        font-weight: 500;
    }

    .content :global(pre) {
        background-color: #f9f9f9;
        box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
        padding: 0.5em;
        border-radius: 2px;
        overflow-x: auto;
    }

    .content :global(pre) :global(code) {
        background-color: transparent;
        padding: 0;
    }

    .content :global(ul) {
        line-height: 1.5;
    }

    .content :global(li) {
        margin: 0 0 0.5em 0;
    }

    .button-mj {
        border: none;
        display: inline-block;
        color: #F9FFF5;
        font-size: 18px;
        /* font-family: 'Open Sans', sans-serif; */
        font-weight: 600;
        line-height: 1.42857143;
        padding: 10px 20px 14px 20px;
        vertical-align: middle;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);
        background-color: #00b955;
    }

</style>

<svelte:head>
    <title>{$_(`page.jogos.jogo.${jogo.url}.title`)}</title>
    <meta name="description" content="{$_(`page.jogos.jogo.${jogo.url}.description`)}">
    <meta name="keywords" content="jogos, cartas, tabuleiro">
    <meta name="author" content="Gustavo Kring">
</svelte:head>


<div class="row" style="margin: 40px 0">
    <div class="col-md-3">
        <img src="{jogo.imagem}" alt="{jogo.nome}">
    </div>
    <div class="col-md-9">
        <h1>{$_(`page.jogos.jogo.${jogo.url}.title`)}</h1>

        <div class='content'>
            {@html $_(`page.jogos.jogo.${jogo.url}.description`)}
        </div>

        <div style="margin: 10px 0;">
            <a class="button-mj" href="/jogar">{$_(`page.buttons.play`)}</a>
            <a class="button-mj" href="/jogos/{jogo.url}/regras" style="margin-left: 20px;">{$_(`page.buttons.rules`)}</a>
        </div>

    </div>
</div>
