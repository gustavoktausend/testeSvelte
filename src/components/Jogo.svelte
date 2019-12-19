<script>
    export let jogo;
    import { _ } from 'svelte-i18n'
    import { Link } from "svelte-routing";
    async function getCountOnline() {
        const res = await fetch(`https://www.megajogos.com.br/ajax/site_counter.jsp?1576186596292`);
        return await res.json();
    }

</script>

<style>
    .card-body {
        text-align: center;
        background-image: url('https://cdn.megajogos.com.br/images/game/bg_grid_card.png');
        background-size: cover !important;
        background-color: #fff3f4;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    .card-footer{
        text-align: center;
        font-size: 14px;
    }

    .card {
        border-radius: 12px;
    }
    .countOnline{
        position: absolute;
        left: 78%;
        top: 5%;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: bold;
    }
    .game-logo {
        display: block;
        margin: auto;
        width: 70%;
        max-width: 140px;
        -webkit-filter: drop-shadow(0px 0px 5px rgba(0,0,0,0.25));
        filter: drop-shadow(0px 0px 5px rgba(0,0,0,0.25));
    }
</style>

<div class="col-md-4">
    <div id="{jogo.id}" class="card">
        <div class="card-body" style="background-color:{jogo.corDeFundo}">
            <span class="countOnline">
                {#await getCountOnline()}
                    Carregando....
                {:then data}
                    {data}
                {/await}
            </span>
            <img class="game-logo" src="{jogo.imagem}" alt="{jogo.nome}">
        </div>
        <div class="card-footer">
            <Link to="/{$_(`page.url.${jogo.url}`)}" state={jogo} >{jogo.url}</Link>
        </div>
    </div>
</div>