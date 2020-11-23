const nextQuestion = (part, href) => {
  const currentUri = new URI();
  const query = currentUri.search(true);
  const answers = {};
  const answer = document.forms[0].elements;

  const refUri = new URI(URI(href, currentUri).href());

  Object.keys(answer).forEach((e, i) => {
    answers[(part + "") + (i + "")] = answer[e].value;
  });
  delete answers[(part + "") + "7"];

  location.href = refUri.search({ ...query, ...answers }).href();
};

const transWithQuery = (href) => {
  const currentUri = new URI();
  const query = currentUri.search(true);

  const refUri = new URI(URI(href, currentUri).href());

  location.href = refUri.search(query).href();
};

if (document.getElementById("timer")) {
  let lastTime = 10;
  setInterval(() => {
    lastTime--;
    document.getElementById("timer").textContent = lastTime + "s";
    if (lastTime == 0) document.getElementById("next").click();
  }, 1000);
}
