import React from 'react';
import { InnerNav } from '../../components/InnerNav/InnerNav';
import styles from './LandingPage.module.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchIdeas } from '../../components/SearchIdeas/SearchIdeas';
import { Routes, Route, Router } from "react-router-dom";

export function LandingPage() {
  const { history } = Routes();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }

  return (
    <div className={styles.landing}>
      <div className={styles['search-area']}>
        <SearchBar search={search} />
        <SearchIdeas />
      </div>
    </div>
  );
}