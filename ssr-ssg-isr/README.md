This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

In **Next.js**, different rendering strategies help optimize performance, SEO, and user experience. Here's a breakdown of the four main rendering techniques:

### 1. **Server-Side Rendering (SSR)**
   - **How it works**: The page is generated **on each request** on the server and then sent to the client.
   - **Use case**: Ideal for **dynamic data** that changes frequently, like dashboards, user profiles, and news websites.
   - **Function in Next.js**:
     ```javascript
     export async function getServerSideProps(context) {
       const res = await fetch('https://api.example.com/data');
       const data = await res.json();
       return { props: { data } };
     }
     ```
   - **Pros**:
     - Fresh data on every request.
     - SEO-friendly since HTML is fully generated on the server.
   - **Cons**:
     - Slower than other methods because it runs on every request.
     - Increased server load.

---

### 2. **Static Site Generation (SSG)**
   - **How it works**: The page is generated **at build time** and served as static HTML.
   - **Use case**: Best for **static content** like blogs, documentation, marketing pages, and portfolios.
   - **Function in Next.js**:
     ```javascript
     export async function getStaticProps() {
       const res = await fetch('https://api.example.com/data');
       const data = await res.json();
       return { props: { data } };
     }
     ```
   - **Pros**:
     - Super fast since it's pre-generated.
     - No server load after deployment.
   - **Cons**:
     - Not suitable for frequently updated data (requires re-deployment to update).

---

### 3. **Incremental Static Regeneration (ISR)**
   - **How it works**: Similar to **SSG**, but allows **rebuilding** specific pages **without a full re-deploy**.
   - **Use case**: Best for **frequently updated** static pages like e-commerce product pages or news sites.
   - **Function in Next.js**:
     ```javascript
     export async function getStaticProps() {
       const res = await fetch('https://api.example.com/data');
       const data = await res.json();
       return { 
         props: { data },
         revalidate: 10, // Regenerates the page every 10 seconds
       };
     }
     ```
   - **Pros**:
     - Fast like SSG but supports updates.
     - Reduces server load compared to SSR.
   - **Cons**:
     - Users might see outdated data until the next revalidation.

---

### 4. **Client-Side Rendering (CSR)**
   - **How it works**: The page is rendered **entirely in the browser** using JavaScript.
   - **Use case**: Ideal for **highly interactive** apps like dashboards, admin panels, and social media feeds.
   - **Function in Next.js**:
     ```javascript
     import { useEffect, useState } from "react";

     function Page() {
       const [data, setData] = useState(null);

       useEffect(() => {
         fetch("https://api.example.com/data")
           .then((res) => res.json())
           .then((data) => setData(data));
       }, []);

       return <div>{data ? data.title : "Loading..."}</div>;
     }
     ```
   - **Pros**:
     - Faster initial load (only HTML shell is served).
     - Good for user-interactive apps.
   - **Cons**:
     - Poor SEO since content is rendered after page load.
     - Slower than pre-rendered methods (SSG/SSR) for first-time users.

---

### 🔥 **Quick Comparison Table**
| Method  | When is HTML Generated? | Best For | SEO | Performance |
|---------|-------------------------|----------|-----|-------------|
| **SSR** | On every request | Dynamic content, user-specific pages | ✅ Good | 🟡 Medium |
| **SSG** | At build time | Blogs, landing pages, documentation | ✅✅ Best | 🟢 Fast |
| **ISR** | At build time + Updates dynamically | E-commerce, news | ✅✅ Best | 🟢 Fast |
| **CSR** | In the browser (client-side) | Dashboards, SPAs | ❌ Bad | 🔴 Slow (initial load) |

---

### **Which One Should You Use?**
- **Need fresh content for every user?** → **SSR**
- **Content doesn't change often?** → **SSG**
- **Want a mix of static performance and dynamic updates?** → **ISR**
- **Building an interactive SPA?** → **CSR**

