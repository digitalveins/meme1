import React, { useEffect, useState } from 'react';

export default () => {
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState();
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((result) => result.json())
    .then((result) => {
      setMemes(result.data.memes);
      setCurrentMeme(result.data.memes[0]);
    })
    .catch((error) => console.log(error));
}, []);

return (
  <div>
    {currentMeme? (
      <img src={currentMeme.url}/>
    ) : (
    <img src={"https://via.placeholder.com/150"} />
    )}
  </div>
  );
};
