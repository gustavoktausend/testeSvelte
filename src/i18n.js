
// adding dicionary off messages => SYNCHRONOUS 
import { addMessages } from 'svelte-i18n';

addMessages('en-US');
addMessages('pt-BR');

import { init } from 'svelte-i18n';

init({
	fallbackLocale: 'en-US',
	initialLocale: 'pt-BR'
});

// ASYNCHRONOUS
//import { register } from 'svelte-i18n';

//register('en-US', () => import('../messages/en-US.json'));
//register('pt-BR', () => import('../messages/pt-BR.json'));
