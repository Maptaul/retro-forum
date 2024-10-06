const loadAllPost = async (category) => {
  // ternary operator
  //   console.log(
  //     `https://openapi.programming-hero.com/api/retro-forum/posts${
  //       category ? `?category=${category}` : ""
  //     }`
  //   );

  //   2nd option

  //   if (category) {
  //     console.log(
  //       `https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`
  //     );
  //   } else {
  //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`);
  //   }

  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts${
      category ? `?category=${category}` : ""
    }`
  );
  const data = await response.json();
  displayAllPost(data.posts);
};

const displayAllPost = (posts) => {
  console.log(posts);
};
loadAllPost();

const handleSearchByCategory = () => {
  const searchText = document.getElementById("searchPosts").value;
  loadAllPost(searchText);
};
