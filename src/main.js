import BlogHeader from "./BlogHeader.svelte";
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

export { sampleBlogHeader, sampleBlogContent };
