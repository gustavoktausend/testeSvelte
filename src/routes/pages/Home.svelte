<script >
    import { onMount, onDestroy } from "svelte"
    import Jogo from "../../components/Jogo.svelte";
    import axios from "axios";

    const getAllGames = async() => {
        try {
            const response = await axios.get(`https://interno.fontec.inf.br/do/GameTypeAction`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    };

</script>
<div class="container">
    <div class="row">
        <div class="col-md-10">
            <br/>
            <div class="row">
                {#await getAllGames()}
                    <p>...waiting</p>
                {:then data}
                    {#each data.games as jogo, i}
                        <Jogo {jogo} />
                    {/each}
                {:catch error}
                    <p style="color: red">{error.message}</p>
                {/await}
            </div>
        </div>
    </div>
</div>


