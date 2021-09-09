const jsonResponse = `{\"data\":[{\"postId\":1,\"id\":1,\"name\":\"Fake activity\",\"email\":\"Fake\",\"body\":\"laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium\"},{\"postId\":1,\"id\":2,\"name\":\"quo vero reiciendis velit similique earum\",\"email\":\"Jayne_Kuhic@sydney.com\",\"body\":\"est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et\"},{\"postId\":1,\"id\":3,\"name\":\"odio adipisci rerum aut animi\",\"email\":\"Nikita@garfield.biz\",\"body\":\"quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione\"},{\"postId\":1,\"id\":4,\"name\":\"alias odio sit\",\"email\":\"Lew@alysha.tv\",\"body\":\"non et atque\\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\\nquia voluptas consequuntur itaque dolor\\net qui rerum deleniti ut occaecati\"},{\"postId\":1,\"id\":5,\"name\":\"vero eaque aliquid doloribus et culpa\",\"email\":\"Hayden@althea.biz\",\"body\":\"harum non quasi et ratione\\ntempore iure ex voluptates in ratione\\nharum architecto fugit inventore cupiditate\\nvoluptates magni quo et\"}],\"status\":200,\"statusText\":\"\",\"headers\":{\"cache-control\":\"max-age=43200\",\"content-type\":\"application/json; charset=utf-8\",\"expires\":\"-1\",\"pragma\":\"no-cache\"},\"config\":{\"url\":\"https://jsonplaceholder.typicode.com/comments\",\"method\":\"get\",\"headers\":{\"Accept\":\"application/json, text/plain, */*\"},\"params\":{\"postId\":1},\"transformRequest\":[null],\"transformResponse\":[null],\"timeout\":0,\"xsrfCookieName\":\"XSRF-TOKEN\",\"xsrfHeaderName\":\"X-XSRF-TOKEN\",\"maxContentLength\":-1,\"maxBodyLength\":-1},\"request\":{}}`;

const list = () => {
  const fake = JSON.parse(jsonResponse);

  return new Promise((resolve) => {
    resolve(fake);
  });
};

const details = () => {
  const fake = JSON.parse(jsonResponse);

  return new Promise((resolve) => {
    resolve(fake);
  });
};

export { list, details };
