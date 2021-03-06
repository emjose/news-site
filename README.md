<p id="header"><p>

<table><tr>
<td> <a href="https://github.com/emjose/model-minority-myth/#header"><img src="Assets/header-left.png" alt="previous" style="width: 200px;"/></a> </td>
<td> <a href="https://github.com/emjose/one-hundred/#header"><img src="Assets/header-center.png" alt="100 days of code" style="width: 580px;"/></a> </td>
<td> <a href="https://github.com/emjose/crypto-tracker/#header"><img src="Assets/header-right.png" alt="next" style="width: 200px;"/></a> </td>
</tr></table>

<br>

<p id="project-title"><p>

<a href=#table-of-contents>![News Site](Assets/inter-027-news-site.png)</a> 

<br>

<a href="https://news-site-emjose.vercel.app/">![News Site](Assets/preview-027-news-site.png)</a> 

#

<p id="table-of-contents"><p>

<a href=#table-of-contents>![Table of Contents](Assets/inter-toc.png)</a>  

- [100 Days of Code](#100days)
- [Installation](#installation)
- [Live Site](#live-site)
- [Resources](#resources)
- [Let's Connect!](#lets-connect) 

#

<p id="100days"><p>

<a href=#100days>![#100DaysOfCode](Assets/inter-100hash.png)</a>  

### Day 27: April 12, 2021
- I started learning <a href="https://nextjs.org/">Next.js</a>, and this app uses the <a href="https://newsapi.org/">News API</a> to fetch news articles.
  
- I'm a proud Dog Dad of <a href="https://www.instagram.com/cocodottie/">two rescue dogs</a>, and I applied a dog theme to the news site.

- Thank you to <a href="https://github.com/portexe">Zack Wilson / PortEXE</a> for his excellent <a href="https://youtu.be/xtItzwYG6oQ">Next.js + NewsAPI tutorial on YouTube!</a>
  
- **Note:** Although the News API fetch request has parameters for the keyword "dogs," some articles unrelated to dogs appear in the newsfeed.

#

<p id="installation"><p>

<a href=#installation>![Installation](Assets/inter-installation.png)</a>

#### 1. PREREQUISITE: This app requires an API key from [News API](https://newsapi.org/).
- Log in or register at [News API](https://newsapi.org/).
- Once logged in, press the "Get API Key" button.
- The generated API key will be alphanumeric and 32 characters long.
- Keep the browser tab with your News API key open for reference.
#### 2. Git clone and cd into the repo folder:
``` 
git clone git@github.com:emjose/news-site.git && cd news-site 
```
#### 3. In the main root directory of the project files, create a new environment file called:
```
.env
```
#### 4. In the .env file, create an environment variable to store the API key. Paste this line:
```
NEXT_PUBLIC_NEWS_KEY=
```
#### 5. Paste your [News API](https://newsapi.org/) key after the equal sign character:
<pre>
NEXT_PUBLIC_NEWS_KEY=<b>NEWS-API-KEY</b> (The API key should have no spaces or dashes)
</pre>
#### 6. The API key variable is used in the fetch request located in /pages/feed/[slug].js:
```
const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=dogs&pageSize=9&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    );
```
#### 7. Back in the terminal, install dependencies:
```
npm install
```
#### 8. Run the development server:
```
npm run dev
```
#### 9. Open [http://localhost:3000](http://localhost:3000) with your browser to launch the News Site app.

#

<p id="live-site"><p>

<a href="https://news-site-emjose.vercel.app/">![Live Site](Assets/inter-live-site.png)</a>

<a href="https://news-site-emjose.vercel.app/">![Live Site](Assets/027-news-site-1.gif)</a>
Users can browse the newsfeed and app pages.
<br>
<br>
<a href="https://news-site-emjose.vercel.app/">![Live Site](Assets/027-news-site-2.gif)</a>
Users can navigate newsfeed pages.

#

<p id="resources"><p>

<a href=#resources>![Resources](Assets/inter-resources.png)</a>  

- #### [Unsplash](https://unsplash.com/)

- #### [News API](https://newsapi.org/) 

- #### [Cloudinary](https://cloudinary.com/)

- #### [My JSON Server](https://my-json-server.typicode.com/)

- #### [Next.js on Github](https://github.com/vercel/next.js/) 

- #### [Learn about Next.js](https://nextjs.org/docs)  

- #### [An Interactive Next.js Tutorial](https://nextjs.org/learn)  

- #### [Coding A News App With Next.js](https://youtu.be/xtItzwYG6oQ) by [Zack Wilson / PortEXE](https://www.youtube.com/channel/UCjGQyJCSU_VVMTu5nigonqg)

- #### [My blog on how I created my Github READMEs](https://emmanueljose.medium.com/readme-a-makeover-story-b9c7be37a6de?sk=7ae6623d365409d875753e4604e42ffd) 

#

<p id="lets-connect"><p>

<a href=#lets-connect>![Let's Connect!](Assets/inter-lets-connect.png)</a>

<p><a href="https://twitter.com/Emmanuel_Labor"><img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" height=30 width=90 alt="Twitter badge"> <a href="https://www.linkedin.com/in/emmanuelpjose/"><img src="https://img.shields.io/badge/linkedin-%230064e7.svg?&style=for-the-badge&logo=linkedin&logoColor=white" height=30 width=90 alt="Linkedin badge"> <a href="https://emmanueljose.medium.com/"><img src="https://img.shields.io/badge/medium-%238700f5.svg?&style=for-the-badge&logo=medium&logoColor=white" height=30 width=90 alt="Medium badge"> <a href="https://www.instagram.com/emmanuel_jose/"><img src="https://img.shields.io/badge/instagram-%23ff0077.svg?&style=for-the-badge&logo=instagram&logoColor=white" height=30 width=90 alt="Instagram badge"> <a href="mailto:emjose@gmail.com"><img src="https://img.shields.io/badge/gmail-%23fd1745.svg?&style=for-the-badge&logo=gmail&logoColor=white" height=30 width=90 alt="Gmail badge"> <a href="https://www.emmanuel-jose.com/"><img src="https://img.shields.io/badge/portfolio-%23FF0000.svg?&style=for-the-badge&logoColor=white" height=30 width=90 alt="Portfolio badge"> <a href="https://github.com/emjose"><img src="https://img.shields.io/badge/github-%23ff8e44.svg?&style=for-the-badge&logo=github&logoColor=white" height=30 width=90 alt="Youtube badge"></p>

#

<a href=#header>![Back to Top](Assets/inter-congrats.png)</a> 



<!-- #

<p id="app-launch"><p>

<a href=#app-launch>![App Launch](Assets/inter-app-launch.png)</a> -->

<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). -->

<!-- ## Getting Started -->

<!-- First, run the development server: -->


<!-- ```bash
npm run dev
# or
yarn dev
``` -->


<!-- You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. -->

<!-- ## Learn More -->

<!-- To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# -->

<!-- ## Deploy on Vercel -->

<!-- The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->