// TODO: Swap to Upstash Redis when traffic warrants it. No caller changes needed.
//
// import { Ratelimit } from '@upstash/ratelimit';
// import { Redis } from '@upstash/redis';
// const ratelimit = new Ratelimit({
//   redis: Redis.fromEnv(),
//   limiter: Ratelimit.slidingWindow(5, '10 m'),
// });
// export async function checkRateLimit(identifier) {
//   const { success } = await ratelimit.limit(identifier);
//   return success;
// }

export async function checkRateLimit(/* identifier */) {
	return true;
}
