<script>
    export let location;
    export let jogo = location.state;
    import { Link } from "svelte-routing";
    import { _, locale, locales } from 'svelte-i18n';
    import axios from "axios";

    const getInfoByJogoId = async (id, locale) => {
        try {
            const response = await axios.get(`http://localhost:8082/jogo/${id+locale}`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    };

    const getUtils = async (locale) => {
        try {
            const response = await axios.get(`http://localhost:8082/util/${locale}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    };

    // Comportamento do Svelte, ao ser alterado o estado, variavel é atualizada e redenrizada novamente
    // Locale Triggers
    $: jogoBundle = getInfoByJogoId(jogo.id, $locale);
    $: utilsBundle = getUtils($locale);

</script>

<style>
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
    {#await jogoBundle then value}
<!--        <title>{jogo.nome}</title>-->
        <meta name="description" content="{value.description_meta}">
        <meta name="keywords" content="jogos, cartas, tabuleiro">
        <meta name="author" content="Gustavo Kring">
    {/await}}
</svelte:head>


<div class="container">
    <div class="row" style="margin: 40px 0">
        <div class="col-md-3">
            <img class="img-responsive" src="https://cdn.megajogos.com.br/images/premium/game-logo/{jogo.image}" alt="{jogo.nome}">
        </div>
        <div class="col-md-9">
            {#await jogoBundle then value}
                <h2>
                    {@html value.about_title }
                </h2>
            {/await}

            <div style="margin: 20px 0;">
                {#await utilsBundle then value}
                    <a class="button-mj" href="/jogar">{value.play_button}</a>
                    <div class="button-mj" style="margin-left: 20px;">
                        <Link to="{jogo.url}/{value.rules_button.toLowerCase()}" state={jogo} >{value.rules_button}</Link>
                    </div>
                {/await}
            </div>
        </div>
    </div>
    <div class="row" style="margin: 40px 0">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="content" >
                        {#await jogoBundle then value}
                            {@html value.about_text }
                        {/await}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
