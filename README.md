# Decentralized Jamstack Comments Engine

Your blog's P.O. Box.

## What is this? 

This is a decentralized, moderated commenting engine for Jamstack blogs or websites.

**Try it out** by entering a comment on the [example blog page](https://thrownness.com/decentralized-jamstack-comments-engine/exampleBlog.html)

I will see them in the [Moderation Dashboard](https://thrownness.com/decentralized-jamstack-comments-engine/) because I am logged in as the owner of that example blog page.

![image](https://user-images.githubusercontent.com/57295746/83358816-1c880000-a344-11ea-90c5-6f24367c2cef.png)

## Installation

**Log in** to the [Moderation Dashboard](https://thrownness.com/decentralized-jamstack-comments-engine/) to create an account for your blog or website. *(You can host this dashboard yourself by simply including the `index.html` file in your own blog or hosting your own from github pages)*

You will see a generated block of code. **Place the code** on everywhere on your website that you would like to have comments show up. Usually, you will want to put this in your pages template. And be sure to actually **include the [`/comments.js`](https://github.com/thrownness/decentralized-jamstack-comments-engine/blob/master/comments.js) file** in your website code so that the suggest code block correctly pulls it in.

**Add any kind of styling** that you want on your blog to change the look of the comments that get pulled in. The exampleBlog in this repo has simple styles like this:

```css
li {
    background-color: bisque;
    padding: 20px;
    width:50%;
}
.messageMeta {
    text-align:right;
    font-style:italic;
}
.commentReply {
    background-color: white;
}
```

And you're done. Use the [Dashboard](https://thrownness.github.io/decentralized-jamstack-comments-engine) to read your comments inbox on a month by month basis and do things with them.
