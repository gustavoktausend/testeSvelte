<script context="module">
    import jogos from './_jogos.js';
</script>

<script>
    import Jogo from '../../components/Jogo.svelte'
</script>

<svelte:head>
    <title>Jogos</title>
    <meta name="description" content="MegaJogos Jogos">
    <meta name="keywords" content="jogos, cartas, tabuleiro">
    <meta name="author" content="Gustavo Kring">
</svelte:head>

<div class="row">
    <div class="col">
        <h2 style="margin-top: 20px;">Jogos</h2>
    </div>
</div>
<br>
<div class="row">
    <div class="col-md-8">
        <div class="row">
            {#each jogos as jogo, i}
                <Jogo {jogo} />
            {/each}
        </div>
    </div>
</div>