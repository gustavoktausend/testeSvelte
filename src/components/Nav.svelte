<script>
    import { Link } from "svelte-routing";
    import { _ } from 'svelte-i18n'

    export let segment;
</script>

<style>
    nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		/*padding: 0 1em;*/
		background: linear-gradient(135deg, #009dd6 0%,#00cfea 100%);
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: right;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: #f0f0f0;
		font-weight: bold;
	}

	.logo {
		float: left;
		padding: 8px 0 8px 0;
	}
</style>

<nav>
    <div class="container" style="padding: 0;">
		<div class="logo">
			<img src="https://cdn.megajogos.com.br/images/logo_top_01_pt_BR.png" alt="logo ">
		</div>
		<ul>
			<li><Link class:selected='{segment === undefined}' to="/">{$_('page.nav.home')}</Link></li>
			<!--<li><a class:selected='{segment === "about"}' href='about'>about</a></li>-->
			<li><Link class:selected='{segment === undefined}' to="Sobre">{$_('page.nav.about')}</Link> </li>
			<li><Link class:selected='{segment === undefined}' to="Jogos">{$_('page.nav.games')}</Link></li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
		</ul>
	</div>
</nav>