import React from "react";
import Layout from "../../components/layout/Layout";
import Main from "../../components/main/Main";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
  return (
    <Layout>
      <SearchBar />
      <Main />
    </Layout>
  );
};

export default Home;
