<script>
	import {link} from "svelte-routing";
	import {_, locale} from 'svelte-i18n'
	import Locales from './Locale.svelte'
	import axios from "axios";

	const getNavByLocale = async (locale) => {
		try {
			const response =
					locale === 'pt-BR' ?
							await axios.get(`http://localhost:8082/navegation/${locale}`):
							locale === 'en-US' ? await axios.get(`http://localhost:8082/navegation/${locale}`):
									await axios.get(`http://localhost:8082/navegation/${locale}`);
			return response.data;
		} catch (e) {
			console.error(e);
		}
	}

	const getIconLocale = locale =>
			locale === 'pt-BR' ? 'pt_BR'
					: locale === 'en-US' ? 'en_US'
					: 'pt_BR';

	$: iconLocale = getIconLocale($locale);

	$: navBundle = getNavByLocale($locale);

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
		text-decoration: none !important;
		padding: 1em 0.5em;
		display: block;
		color: #f0f0f0 !important;
		font-weight: bold;
	}
</style>

<nav>
    <div class="container" style="padding: 0;">
		<div class="logo">
			<img src="https://cdn.megajogos.com.br/images/logo_top_01_{iconLocale}.png" alt="logo ">
		</div>
		<ul>
			<li><Locales/></li>
			{#await navBundle then value}
				<li><a href="/{value.help.toLowerCase()}" use:link>{value.help}</a></li>
				<li><a href="/{value.blog.toLowerCase()}" use:link>{value.blog}</a></li>
				<li><a href="/{value.about.toLowerCase()}" use:link>{value.about}</a></li>
				<li><a href="/" use:link>{value.home}</a> </li>
			{/await}
		</ul>
	</div>
</nav>