const query = URI().search(true);

Object.keys(query).forEach((e, i) => {
  document.getElementsByTagName("input")[i].value = query[e];
});
