import { camelCase } from 'https://cdn.pika.dev/camel-case@^4.1.1';
// ...before code
export const message = camelCase(typeof event === 'string' ? event : '')
// ... before code
