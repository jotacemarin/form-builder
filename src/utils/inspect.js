import { flatten, unflatten } from "flat";

export const toFields = (object) => flatten(object);

export const toObject = (object) => unflatten(object);
