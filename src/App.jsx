import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Osvaldo Kalvaitir"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita necessitatibus quaerat vero sit magni, veniam mollitia accusantium beatae illo quam eius voluptates laborum dicta? Ducimus laborum nihil pariatur recusandae quas."
      />

      <Post
        author="Alessandra Kalvaitir"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur modi sequi qui. Similique sapiente ab incidunt vel blanditiis neque unde. Iusto totam laborum porro vel qui et dolorum libero a."
      />
    </div>
  )
}