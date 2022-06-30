import Header from "../components/Header"
import './global.css'
import Post from "./Post"

function App() {

  return (
    <>
      <Header />
      <Post
        author="peve"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga odit consectetur inventore, repellat ducimus delectus eveniet corrupti est nihil facilis, error dolorem ipsam debitis assumenda labore laudantium sint! Quas, vero."
      />
    </>
  )
}

export default App

