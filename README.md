# withfabric.xyz

## Getting started

Install deps:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

## Create a new post

Create a new folder in `app/posts/(content)/` with the desired slug name. The only file in the folder will be titled `page.mdx`.

Each .mdx file should include at least the following front matter:

```mdx
---
title: "Your Post Title"
headerImage: "/images/your-header-image.jpg"
---
```

## Include inline images in posts

below the front matter, import the Image component:

```mdx
---
title: "Your Post Title"
headerImage: "/images/your-header-image.jpg"
---

import Image from 'next/image'

# My post title

Welcome to my blog.

Here is an image that I'd like to share:

<Image
  src="/images/my-inline-image.jpg"
  alt="An inline image"
  width={600}
  height={400}
/>
```
