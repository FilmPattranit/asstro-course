import { defineConfig } from 'astro/config';
import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    })
});

export default defineConfig({
    integrations: [],
});

export const collections = {
    //posts = folder name, postCollection = file under "posts" folder
    posts: postCollection,
};