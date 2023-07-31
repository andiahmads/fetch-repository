import { Component, createEffect, createSignal } from 'solid-js';
import Nav from './components/nav';
import Home from './pages/Home';
import SavedRepos from './pages/SavedRepos';
import { Route, Routes } from "@solidjs/router";


const [username, setUsername] = createSignal('andiahmads');
const [repos, setRepos] = createSignal([]);
createEffect(async () => {
  const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`);
  setRepos(await res.json())
})


const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favrepos' element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export { username, setUsername, repos }

export default App;
