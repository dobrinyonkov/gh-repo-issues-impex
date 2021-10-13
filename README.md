# Github issues

Transfer open issues from one repository to another.

## Installation

Clone this repository  on your machine.

```bash
git clone <project url>
```

```bash
cd <project>
```

```bash
npm install
```

Create `.env` file at the root directory and add the following variables. Replace the values with real ones.

```bash
#API of the repository 1
GH_URL=https://api.github.com
#Repository organization
GH_ORG=<org>
#Repository name
GH_REPO=<name>

#API of the target repository
GH_URL_TO=https://api.github.com
#Target repository organization
GH_ORG_TO=<org>
#Target Repository name
GH_REPO_TO=<name>

TOKEN=<github token>
```

## Usage

```bash
npm run start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.