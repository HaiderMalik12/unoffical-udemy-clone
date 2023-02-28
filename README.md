This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### NOTES

### THINK IN TERMS OF MODELS


### MODELS

COURSE
SECTION
VIDEO
TOPIC

### Relationship

### ONE TO MANY RELATIONSHIP

- A course can belong to a topic
- A topic can have many courses

- A Course can have many sections
- Many sections can belong to single course

### Many to Many relationship

- Many videos can belong to many sections


```js
const course = {
   
   title: 'Web Development',
   desc: 'HTML | CSS | JavaScript | Web programming | Web development | Front-end | Responsive | JQuery',
   author: 'Haider Malik',
   promo: 'vimeoId',
   pirce: 13,
   outcomes: ['prepare for your indiustry', ''],
   slug: 'web-development',
   topic: 'Development',
   sections: [
    {
        id: 1,
        title : 'Getting started node',
        desc: 'Section Description',
        videos: [
            {
                id: 1,
                title: 'Create Node server',
                vimeoId: '123123'

            } 
        ]
    },
     {
        id: 2,
        title : 'Deploy Node server',
        desc: 'Section Description',
        videos: [
            {
                id: 3,
                title: 'Create Node server',
                vimeoId: '123123'

            },
            {
                id: 2,
                title: 'Install Node',
                vimeoId: '123123'

            }  
        ]
    }
   ]

}
```