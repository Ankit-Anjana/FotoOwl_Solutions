import { init } from "@instantdb/react";

const appId = import.meta.env.VITE_INSTANT_APP_ID;

if (!appId) {
  throw new Error("InstantDB App ID missing. Check .env file");
}

export const db = init({
  appId,
});
