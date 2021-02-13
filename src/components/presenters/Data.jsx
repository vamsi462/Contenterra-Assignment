

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { URL } from '../../api/services/url';
import { Card } from '../core/Card';
const Data = () => {
  const [info, setInfo] = useState({ children: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(URL);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(URL);
        const {
          data: { data },
        } = result;
        setInfo(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return (
    <div className='service'>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='service-container'>
          {info.children.map((item, index) => {
            const { data } = item;
            return (
              <Card
                title={data.title}
                html={data.selftext_html}
                url={data.url}
                score={data.score}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Data;
