import * as prismic from '@prismicio/client';

export const repositoryName = 'WWBlog';

const endpointAPI = prismic.getEndpoint(repositoryName);

export const client = prismic.createClient(endpointAPI, {
    accessToken:'',
})