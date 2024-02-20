import MovieComponent from "./components/Movie";
import PostsList from "./features/posts/PostsList";
import AddEntryForm from "./features/posts/AddEntry";
import Landing from "./components/Landing";

function App() {
  return (
    <main className="App">
      <Landing />
      <MovieComponent />
      <AddEntryForm />
      <PostsList />
    </main>
  );
}

export default App;