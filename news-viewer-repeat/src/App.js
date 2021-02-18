import React, { useState, useCallback } from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState(null);

  const onClick = useCallback(async () => {
    try {
      const res = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=81e7f740025843d8b8f7993b10f14919'
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
      )}
    </div>
  );
};

export default App;
