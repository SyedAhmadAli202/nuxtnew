const query: string = `
  {
    user(username: "Ibizatoken") {
      publication {
        posts(page: 0) {
          slug
          title
          brief
          coverImage
          replyCount
          totalReactions
        }
      }
    }
  }
`;
export const fetchPosts = async () => {
  const resp: Response = await fetch('https://api.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ query })
  });
  const hashnodeResponse = await resp.json();
  return hashnodeResponse.data.user.publication.posts;
};
export const fetchThreeMostRecentPost = async () => {
    const posts = await fetchPosts();
    return posts.slice(0, 3);
  };
