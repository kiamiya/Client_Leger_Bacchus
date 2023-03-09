import { useParams } from "react-router-dom";

import Header from "./../components/Header";
import Main from "./../components/Main";
import Footer from "./../components/Footer";

const Articles = () => {
  const { articleId } = useParams();

  return (
    <>
      <Header />
      <Main />
      <p>articles {articleId}</p>
      <Footer />
    </>
  );
};
export default Articles;