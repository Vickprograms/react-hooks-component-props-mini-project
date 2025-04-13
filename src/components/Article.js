import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function getReadTimeEmoji(minutes) {
    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5));
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10));
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{getReadTimeEmoji(minutes)} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
