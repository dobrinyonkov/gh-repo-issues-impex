const axios = require("axios");

require("dotenv").config();

const headersList = {
  Accept: "application/vnd.github.cloak-preview",
  'Authorization': `token ${token}`
};

const github = process.env.GH_URL;
const org = process.env.GH_ORG;
const repo = process.env.GH_REPO;

const githubTo = process.env.GH_URL_TO;
const orgTo = process.env.GH_ORG_TO;
const repoTo = process.env.GH_REPO_TO;
const token = process.env.TOKEN;

const createIssue = async (data) => {
  console.log("Creating issue:", data);

  const reqOptionsIssues = {
    url: `${githubTo}/repos/${orgTo}/${repoTo}/issues`,
    method: "POST",
    headers: {
      ...headersList,
      'Content-Type': 'application/json',
    },
    data,
  };

  const response = await axios
    .request(reqOptionsIssues)
    .catch((error) => console.log(error));

  console.log(response?.status, response?.statusText);

  return {
    success: response?.status >= 200 && response?.status < 300
  }
}

const getIssues = async () => {
  const reqOptionsIssues = {
    url: `${github}/repos/${org}/${repo}/issues`,
    method: "GET",
    headers: headersList,
  };

  const response = await axios
    .request(reqOptionsIssues)
    .catch((error) => console.log(error));

  return response.data;
};

const main = async () => {
  const issues = await getIssues();

  if (Array.isArray(issues)) {
    for (const issue of issues) {
      const result = await createIssue({
        "title": issue.title,
        "body": issue.body,
      })

      if (result.success) {
        // TODO : remove issue
      }
    }
  }
};

main();
