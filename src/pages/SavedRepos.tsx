import { Component, For, createSignal } from "solid-js";
import RepoCards, { Repo } from "../components/RepoCards";

const [savedRepos, setSavedRepos] = createSignal([] as Repo[])

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>saved repos</h2>
      <For each={savedRepos()}>
        {(repo: Repo) => <RepoCards repo={repo} />}
      </For>
    </div>
  )
}

export { setSavedRepos, savedRepos };
export default SavedRepos;

