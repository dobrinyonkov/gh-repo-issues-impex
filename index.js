const fs = require("fs");
const path = require("path");
const axios = require("axios");

require("dotenv").config();

const headersList = {
  Accept: "application/vnd.github.cloak-preview",
};

// const delimiter = ";;";
const github = process.env.GH_URL;
const org = process.env.GH_ORG;
const repo = process.env.GH_REPO;
const outDir = path.join(__dirname, "out");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const doRequest = async () => {
  const reqOptionsIssues = {
    url: `${github}/repos/${org}/${repo}/issues`,
    method: "GET",
    headers: headersList,
    auth: {
      username: process.env.GH_USER,
      password: process.env.GH_TOKEN,
    },
  };

  const response = await axios
    .request(reqOptionsIssues)
    .catch((error) => console.log(error));

  // do something with response.data
  console.log(response.data[0]);
};

const main = async () => {
  await doRequest();
};

main();
