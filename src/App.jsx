import {useState} from "react";
import {tvShows} from "./shows/data.js";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows]=useState(tvShows);
  const [selectedShow,setSelectedShow]=useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} selectedShow={selectedShow}/>
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
