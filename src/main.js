import BlogHeader from "./BlogHeader.svelte";
import BlogFooter from "./BlogFooter.svelte";
import BlogMain from "./BlogMain.svelte";

const sampleBlogHeader = new BlogHeader({
  target: document.body,
  props: {
    title: "My Cool Blog Post",
    description:
      "A simple svelte app that I built as a learning proof of concept",
    type: "Svelte"
  }
});

const sampleBlogContent = new BlogMain({
  target: document.body
});

const sampleBlogFooter = new BlogFooter({
  target: document.body,
  props: {
    tags: ["JavaScript", "web development", "css", "html", "UI", "svelte"],
    type: "Svelte"
  }
});

export { sampleBlogHeader, sampleBlogContent };
