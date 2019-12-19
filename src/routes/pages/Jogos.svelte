<script context="module">
    import jogos from './_jogos.js';
</script>

<script>
    import Jogo from '../../components/Jogo.svelte'
    import Locales from '../../components/Locale.svelte'
    import { _ } from 'svelte-i18n'
</script>

<svelte:head>
    <title>Jogos</title>
    <meta name="description" content="MegaJogos Jogos">
    <meta name="keywords" content="jogos, cartas, tabuleiro">
    <meta name="author" content="Gustavo Kring">
</svelte:head>
<div class="container">
    <div class="row">
        <div class="col">
            <h2 style="margin-top: 20px;">{$_('page.jogos.title')}</h2>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-10">
            <div class="row">
                {#each jogos as jogo, i}
                    <Jogo {jogo} />
                {/each}
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <Locales />
        </div>
    </div>

</div>



