import React from "react";
import "./widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Dance 254 is back", "Top News - 3001 readers")}
      {newsArticle("Coronavirus: KE updates", "Top News - 2541 readers")}
      {newsArticle("Tesla Hits new hights", " Cars & auto - 2041 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 2321 readers")}
      {newsArticle("Is Redux dying", "Code - 993 readers")}
      {newsArticle("Maize global shortage", "Food - 338 readers")}
      {newsArticle("A litre of water a day", "Health - 1003 readers")}
      {newsArticle("Too hot in Europe", "Weather - 677 readers")}
      {newsArticle("Ukraine stands firm", "War & Politics - 20038 readers")}
    </div>
  );
}

export default Widgets;
