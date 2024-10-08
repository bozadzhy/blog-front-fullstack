import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { useEffect, useLayoutEffect } from "react";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import { fetchPosts, fetchTags } from "./redux/slices/posts";
import TagPage from "./pages/TagPage";

function App() {
  const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);

  useLayoutEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/tags/:name" element={<TagPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
