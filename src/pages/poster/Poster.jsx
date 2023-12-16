import React from "react";
import Layout from "../../components/layout/Layout";
import "./Poster.css";

const Poster = () => {
  const arr = [
    "https://picsum.photos/240/280",
    "https://picsum.photos/240/280",
    "https://picsum.photos/240/280",
    "https://picsum.photos/240/280",
    "https://picsum.photos/240/280",
    "https://picsum.photos/240/280",
    "https://picsum.photos/240/280",
    "https://picsum.photos/240/280",
  ];
  return (
    <Layout>
      <div className="poster_wrapper">
        <div className="container">
          <h2 className="poster_title">Создать объявление </h2>
          <div className="poster_photo-wrapper">
            <h3 className="poster_title">Фото </h3>
            <p className="poster_subtitle">
              Первое фото будет на обложке объявления. Перетащите, чтобы
              изменить порядок.
            </p>
            <div className="add_photo-wrapper">
              {arr.map((photo) => {
                return <img src={photo} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Poster;
