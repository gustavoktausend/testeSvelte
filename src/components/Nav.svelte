<script>
    import { Link } from "svelte-routing";
</script>

<style>
    nav {
        border-bottom: 1px solid rgba(255,62,0,0.1);
        font-weight: 300;
        padding: 0 1em;
        background: linear-gradient(135deg, #009dd6 0%,#00cfea 100%);
    }
</style>

<nav>
    <Link to="/">Home</Link>
    <Link to="Sobre">About</Link>
    <Link to="Jogos">Jogos</Link>
</nav>