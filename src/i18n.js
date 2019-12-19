
// adding dicionary off messages => SYNCHRONOUS 
import { addMessages } from 'svelte-i18n';

import enUS from '../messages/en-US.json';
import pt from '../messages/pt-BR.json';

addMessages('en-US', enUS);
addMessages('pt-BR', pt);

import { init } from 'svelte-i18n';

init({
	fallbackLocale: 'en-US',
	initialLocale: {
    navigator: true, // i.e 'en-US'
	},
});

// ASYNCHRONOUS
//import { register } from 'svelte-i18n';

//register('en-US', () => import('../messages/en-US.json'));
//register('pt-BR', () => import('../messages/pt-BR.json'));
