import { Component } from "solid-js";
import { savedRepos, setSavedRepos } from "../pages/SavedRepos";

export type Repo = {
  id: string,
  html_url: string,
  name: string,
  description: string,
  stargazers_count: number,
  owner: {
    login: string
  }
}

interface Props {
  repo: Repo
}

const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
}

const unsaveRepo = (repoId: string) => {
  const nextState = savedRepos()?.filter((item) => item.id !== repoId)
  setSavedRepos(nextState)
}


const RepoCards: Component<Props> = ({ repo }) => {
  return (
    <div class="card">
      <div class="card-header">
        &#11088; stars: {repo.stargazers_count}
      </div>
      <div class="card-body">
        <a href={repo.html_url} class="h4 card-title text-decoration-none" target="_blank" rel="noreferrer">
          <strong>
            {repo.owner?.login}
          </strong>
          {repo.name}
        </a>
        <p class="card-text">
          {repo.description}
        </p>
        <button class="btn btn-success" onClick={() => saveRepo(repo)}>save</button>
        <button class="btn btn-danger" onClick={() => saveRepo(repo)}>unsave</button>
      </div>
    </div>
  )
}

export default RepoCards;
