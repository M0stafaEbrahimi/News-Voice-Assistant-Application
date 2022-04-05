import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";
const alanKey =
  "a3af5e2efefb38477415c09d999f3d732e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://ichef.bbci.co.uk/news/1024/branded_news/E58C/production/_111846785_gettyimages-920743046.jpg"
          className={classes.robotLogo}
          alt="robotLogo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
