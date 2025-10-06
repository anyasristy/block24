import "./shows.css";
/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({shows,setSelectedShow, selectedShow}) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          key={show.name}
          className={`show ${selectedShow?.name === show.name ? "selected" : ""}`}
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
