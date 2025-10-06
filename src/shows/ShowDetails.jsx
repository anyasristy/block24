import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";
/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  if (!show) {
    return <div className="show-details">Select a show to see details.</div>;
  }
  return (
    <div className="show-details">
      <EpisodeList episodes={show.episodes} setSelectedEpisode={setSelectedEpisode}/>
      <EpisodeDetails episode={selectedEpisode}/>
    </div>
  );
}
