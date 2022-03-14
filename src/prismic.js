import * as prismic from '@prismicio/client';
export const repositoryName = 'WWBlog';

const endpointAPI = prismic.getEndpoint(repositoryName);
console.log(endpointAPI)
export const client = prismic.createClient(endpointAPI, {
    accessToken:'',
    routes: [
        {
            type:'page',
            path:'/:uid',
        },
    ],
})