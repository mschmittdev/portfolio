---
title: 'Client-side Rendering vs. Server-side Rendering vs. Static Site Generation'
subtitle: 'Advantages, Disadvantages & Use Cases'
img: 'csr-ssr-ssg.png'
createdAt: 'November 28, 2022'
updatedAt: 'November 28, 2022'
---

Recently, I started learning Next.js and came across all the different rendering methods. In the beginning, I was very confused as to which method I should choose in which situations.

After some trial and error, I think I've got a better idea of their advantages, disadvantages, and use cases. Here's what I've learned.

## Client-side Rendering
Client-side Rendering (CSR) is a rendering mode using a JavaScript file to generate the content **in the browser**. Upon a request, the server sends an HTML skeleton with a JavaScript bundle. After the browser receives these files, it processes the JavaScript code and renders the content accordingly.

### Advantages
#### Faster page loads
The routing and display of the content are handled by JavaScript on the client side. Therefore, there's no need for the browser to refresh the page on every reload. This improves performance considerably after the initial load.

#### Reduced server-side workload
With CSR, the server's task only involves sending the HTML file and the JavaScript bundle to the client. The logic within the JavaScript files is processed on the client. This saves a lot of computational resources on the server which can keep costs low.

#### Better user experience
Since the pages don't refresh on every request, the user has a smooth and fast experience exploring the website.

### Disadvantages
#### Slow on the initial request
When the website gets requested for the first time by a client, it needs to load the whole JavaScript file, call the APIs (if applicable) and generate the content based on the received data. This slows down the initial load.

#### Lack of SEO possibilities
As the HTML file that is sent to the browser is more or less empty, search engine crawlers cannot find any content to read unless they execute the JavaScript bundle. Thus, it's difficult for search engines to index your website, and will likely not appear in search result pages.

### Use cases
Taking the advantages and disadvantages into account, CSR is most suitable for web pages that don't have any SEO needs but want to provide a smooth user experience, especially when they spend a lot of time on the site. This can be the case for:
- Dashboards
- The app part of a SaaS business
- Protected content that can only be accessed via authentication, e.g. user settings

## Server-side Rendering
Contrary to CSR, server-side rendering (SSR) renders the HTML files on every request **on the server** and sends the generated HTML file to the client.

### Advantages
#### SEO
Since the HTML file is generated on the server and sent to the client in a content-rich form, web crawlers have an easier time reading and indexing your website.

#### Quick initial access
As the HTML file the client receives is already content-rich, the JavaScript bundle does not need to be fully loaded until your users can interact with your website. 

### Disadvantages
#### Slower page transitions
It's also possible to create SSR pages without reloading the webpage. However, the HTML file still needs to be rendered on the server which takes some time. 

Therefore, page transitions can appear slow or laggy for the user. It can also lead to confusion if the user doesn't receive any indication that the page is loading.

#### Server costs
In order to generate the HTML file, the server usually needs to execute some kind of logic to get the necessary content. As this happens on the server for SSR instead of on the client-side, you might need more powerful servers.

### Use cases
SSR is ideal for webpages that are dependent on search engine traffic but still need to display some dynamic content, e.g. user-specific data. 

E-commerce sites might be a good example because users should be able to find the products on search engines. The order in which the products should be displayed, however, might be different on every request depending on the user's past history, for example.

## Static Site Generation
Static Site Generation (SSG) is similar to SSR in that it renders the HTML files on the server. Unlike SSR, however, SSG generates the HTML files on **build time** rather than on every request.

### Advantages
#### Super-fast websites
Since the HTML files are rendered ahead of time, response times are blazingly fast. 

#### SEO
Just like SSR, SSG makes it easier for web crawlers to read and index your pages because the client receives rendered HTML files.

### Disadvantages
#### Longer build times
As the files are generated ahead of time, all the logic that fetches and processes the necessary data is executed during build time. This slows down the building process.

#### Need to trigger a rebuild after each change in the content
In order to reflect changes made to the content, you need to trigger a rebuild in order to render the HTML file with the new content. Though, you can automate this process with CI/CD workflows like Github Actions.

### Use cases
SSG is perfect for static websites that do not change very often. This can be the case for:
- Blogs posts
- Marketing pages
- Help and documentation

## Closing Thoughts
No rendering method is better than the other. Every one of them has its own advantages and disadvantages that make them useful for different situations. 

Luckily, with modern frameworks like [Next.js](https://nextjs.org/) or [Nuxt.js](https://nuxtjs.org/), you don't need to choose one over the other for an entire project. You can combine them however you wish for different parts of the application. 

So you can choose at your own discretion which method works best for your needs.