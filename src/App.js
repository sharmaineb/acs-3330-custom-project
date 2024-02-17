import MovieComponent from "./components/Movie";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPost";
import Landing from "./components/Landing";

function App() {
  return (
    <main className="App">
      <Landing />
      <MovieComponent />
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;