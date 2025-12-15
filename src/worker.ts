import { syncAccount } from './syncAccount.js';

export default {
	async scheduled(_event, env, _ctx): Promise<void> {
		await syncAccount(env);
	},
	async fetch(request, env, ctx) {
		// You can view your logs in the Observability dashboard
		await syncAccount(env);
		console.info({ message: 'Hello World Worker received a request!' });
		return new Response('Hello World!');
	}
} satisfies ExportedHandler<Env>;