import React, { useState } from 'react';
import './style.css';

const Home = () => {
  const [inputLang, setInputLang] = useState('en-GB');
  const [outputLang, setOutputLang] = useState('hi-IN');
  const [text, setText] = useState('');
  const [ans, setAns] = useState('');
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    setLoading(true);
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '59b04a2c15msha87c70262cd1536p1ac0fdjsn01b84cb3bf3e',
        'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
      },
      body: new URLSearchParams({
        from: inputLang,
        to: outputLang,
        text: text
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Assuming the API returns JSON
      setAns(result.translatedText); // Assuming 'translatedText' is the field in JSON
    } catch (error) {
      console.error('Error translating text:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form action="" onSubmit={(e) => { e.preventDefault(); translateText(); }}>
        <div className="heading">
          <h1>Translate</h1>
        </div>
        <div className="setup">
          <input onChange={(e) => setInputLang(e.target.value)} type="text" placeholder='Input language' value={inputLang} />
          <p> &#x2192;</p>
          <input onChange={(e) => setOutputLang(e.target.value)} type="text" placeholder='Output language' value={outputLang} />
        </div>
        <textarea className="textInput" onChange={(e) => setText(e.target.value)} placeholder='Enter input text' value={text}></textarea>
        <textarea readOnly value={loading ? "Translating..." : ans}></textarea>
      </form>
    </div>
  );
}

export default Home;
