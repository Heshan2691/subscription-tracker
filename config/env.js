// eslint-disable-next-line no-undef
// This file is intended to run in a Node.js environment
import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV, DB_URI } = process.env;
