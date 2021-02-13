import React from 'react';

export const Card = (props) => {
  const { title, html, url, score } = props;
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>
        {html
          ? html
          : '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Experimented with &amp;quot;Who&amp;#39;s Hiring&amp;quot; and '}
      </p>
      <a href='/'>{url}</a>
      <h4>{score}</h4>
    </div>
  );
};
