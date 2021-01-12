---
title: Keep your website from being framed
permalink: /articles/keep-your-website-from-being-framed
date: 2011-07-14
postType: articles
status: 1

author: Long
pageClass: article
type: post
tags:
- Web design and development
---

My interest in this topic rose when Lori Deschene, the founder of Tiny Buddha, wrote about her website being put in a frame by BlogHer.

Having your website in a frame can confuse your visitors into thinking that your website is part of another branding that isn’t yours. It can also mess up the URL and screw up bookmarks and link-sharing. I don’t want to dwell too much on why frames are bad, but I want to show you a way to free your website in case it ends up being in somebody’s frame.

All you need is a small piece of JavaScript in the &lt;head&gt; section of your HTML code.

```javascript
<script type="text/javascript">
  if (top != self) top.location.href = self.location.href
</script></pre>
```

With this, when a website decides to put your website in a frame, your website will be able to break free and your URL will show up in the address bar as it should.
