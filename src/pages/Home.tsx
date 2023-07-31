import { Component, For } from "solid-js";
import { repos, setUsername, username } from '../App';
import RepoCards, { Repo } from "../components/RepoCards";



const Home: Component = () => {
  const reffectWithUsername = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector('#usernameInput') as HTMLInputElement
    setUsername(usernameInput.value);
  }
  return (
    <div>
      <form class='mb-3' onSubmit={(event) => reffectWithUsername(event)}>
        <input type="text" class="p-1 align-middle" id="usernameInput" required />
        <button class="btn btn-dark ms-3 w-auto">Fetch</button>
      </form>
      <h3>Github repos for {username()}</h3>

      <For each={repos()}>{(repo: Repo) => <RepoCards repo={repo} />}</For>

    </div>
  )
}

export default Home;

