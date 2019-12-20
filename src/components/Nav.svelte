<script>
    import { link } from "svelte-routing";
    import { _ } from 'svelte-i18n'

</script>

<style>
    nav {
        border-bottom: 1px solid rgba(255,62,0,0.1);
        font-weight: 300;
        padding: 0 1em;
        background: linear-gradient(135deg, #009dd6 0%,#00cfea 100%);
        height: 58px;
        margin: 0px auto;
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


	.logo {
		float: left;
		padding: 8px 0 8px 0;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: #f0f0f0;
		font-weight: bold;
	}
</style>

<nav>
    <div class="container" style="padding: 0;">
		<div class="logo">
			<img src="https://cdn.megajogos.com.br/images/logo_top_01_pt_BR.png" alt="logo ">
		</div>
		<ul>
<!--			<li><Link to="/">{$_('page.nav.home')}</Link></li>-->
<!--			<li><Link to="sobre">{$_('page.nav.about')}</Link> </li>-->
<!--			<li><Link to="jogos">{$_('page.nav.games')}</Link></li>-->
			<li><a href="/{$_('page.url.nav.games')}" use:link>{$_('page.nav.games')}</a> </li>
			<li><a href="{$_('page.url.nav.about')}" use:link>{$_('page.nav.about')}</a> </li>
			<li><a href="/" use:link>{$_('page.nav.home')}</a> </li>
			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
		</ul>
	</div>
</nav>