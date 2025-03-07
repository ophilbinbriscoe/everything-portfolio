import { getBlogPosts } from "./posts";

const isImage = (path: string) => path.endsWith(".jpeg");
const isVideo = (path: string) => path.endsWith(".mp4");

function extractMediaUrls(content: string): string[] {
  // The regex looks for patterns like: url="...mp4" (or jpeg)
  // It matches the literal "url=" followed by an optional whitespace,
  // then a double quote, any characters (except double quotes) ending in .mp4, then a closing double quote.
  const regex = /"([^"]+\.(?:jpeg|mp4))"/g;
  const matches = Array.from(content.matchAll(regex));
  return matches.map(match => match[1]);
}

export function getAllMedia() {
  let allPosts = getBlogPosts().sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) >
      new Date(b.metadata.publishedAt)
    ) {
      return -1;
    }
    return 1;
  });

  let media: {src: string; type: "image" | "video"; alt: string; href?: string;}[] = [];

  allPosts.forEach(post => {
    let urls = extractMediaUrls(post.content);

    urls.forEach(url => {
      media.push({
        src: url,
        type: isImage(url) ? "image" : "video",
        alt: post.metadata.title,
        href: `/projects/${post.slug}`,
      });
    });
  });

  return media;
}