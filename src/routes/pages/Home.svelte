<script >
    import { onMount, onDestroy } from "svelte"
    import Jogo from "../../components/Jogo.svelte"
    import axios from "axios";

    // export let jogos = [];
    import jogos from './_jogos.js';
</script>
<div class="container">
    <div class="row">
        <div class="col-md-10">
            <br/>
            <div class="row">
                {#await jogos}
                    <p>...waiting</p>
                {:then data}
                    {#each jogos as jogo, i}
                        <Jogo {jogo} />
                    {/each}
                {:catch error}
                    <p style="color: red">{error.message}</p>
                {/await}
            </div>
        </div>
    </div>
</div>


