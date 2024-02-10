import MovieComponent from "./components/Movie";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPost";

function App() {
  return (
    <main className="App">
      <MovieComponent />
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;