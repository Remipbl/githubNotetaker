const getRepos = username => {
  username = username.toLowerCase().trim()
  const url = `https://api.github.come/users/${username}/repos`

  return fetch(url).then((res) => res.JSON());
};

const getBio = username => {
  username = username.toLowerCase().trim()
  const url = `https://api.github.come/users/${username}`

  return fetch(url).then((res) => res.JSON());
};

export default {
  getRepos,
  getBio,
};