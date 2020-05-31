# Decentralized Jamstack Comments Engine

Your blog's P.O. Box.

## What is this? 

This is a decentralized, moderated commenting engine for Jamstack blogs or websites.

## Installation

Log in to the dashboard to create an account for your blog or website.

You will see a generated block of code. Place it on everywhere on your website that you would like to have comments show up. Usually, you will want to put this in your pages template. And be sure to actually include the [`/comments.js`](https://github.com/thrownness/decentralized-jamstack-comments-engine/blob/master/comments.js) file in your website code so that the suggest code block correctly pulls it in.

Add any kind of styling that you want on your blog to change the look of the comments that get pulled in. The exampleBlog in this repo has simple styles like this:

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