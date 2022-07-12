import type { User } from "$lib/interfaces/user";

import { writable } from 'svelte/store';

export const user = writable({} as User);
export const isLoggedIn = writable(false);

