<script>
    export let location;
    export let jogo = location.state;
    import { _, locale, locales } from 'svelte-i18n'
    import axios from "axios";

    const getInfoByJogoId = async (id, locale) => {
        try {
            const response =
                    locale === 'pt-BR' ?
                            await axios.get(`http://localhost:8082/jogo/${id+locale}`):
                            locale === 'en-US' ? await axios.get(`http://localhost:8082/jogo/${id+locale}`):
                                    await axios.get(`http://localhost:8082/jogo/${id+locale}`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    };

    $: jogoBundle = getInfoByJogoId(jogo.id, $locale);


</script>

<svelte:head>
    {#await jogoBundle then value}
        <title>{value.rules_title}</title>
        <meta name="description" content="{value.description_meta}">
        <meta name="keywords" content="jogos, cartas, tabuleiro">
        <meta name="author" content="Gustavo Kring">
    {/await}}
</svelte:head>

<div class="container">
    <br>
    <div class="row" style="margin: 40px 0">
        <div class="col-md-3">
            <img class="img-responsive" src="https://cdn.megajogos.com.br/images/premium/game-logo/{jogo.image}" alt="{jogo.nome}">
        </div>
        <div class="col-md-9">
            {#await jogoBundle then value}
                <h1>{@html value.rules_title} </h1>
            {/await}
        </div>
    </div>
    <div class="row" style="margin: 40px 0">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="content">
                        {#await jogoBundle then value}
                            {@html value.introduction_title}
                            {@html value.introduction_text}
                            <br>
                            {@html value.description_title}
                            {@html value.description_text}
                            <br>
                            {@html value.extraInfo_title}
                            {@html value.extraInfo_text}
                        {/await}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>