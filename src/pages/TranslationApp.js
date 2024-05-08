import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./style.css";

function TranslationApp() {
  const [inputText, setInputText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [translationResult, setTranslationResult] = useState("");

  // Memoize the translateText function to avoid unnecessary re-renders
  const translateText = useCallback(async () => {
    if (!inputText.trim()) return;

    const encodedParams = new URLSearchParams();
    encodedParams.set("q", inputText);
    encodedParams.set("target", targetLanguage);

    const options = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "2b30ba2520msh69dafce22320771p1e2eb8jsn61e44f94d226",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.post(
        "https://google-translate1.p.rapidapi.com/language/translate/v2",
        encodedParams.toString(),
        options
      );

      setTranslationResult(response.data.data.translations[0]?.translatedText);
      } catch (error) {
        console.error(error);
      }
    }, [inputText, targetLanguage]);

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        if (inputText.trim() !== "") {
          translateText();
        }
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    }, [inputText, translateText]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Translation Application</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to translate..."
        className="w-full p-4 border border-gray-300 rounded-md mb-4"
      ></textarea>

      <div className="mb-4">
        <label htmlFor="targetLanguage" className="block mb-2">
          Target Language:
        </label>
        <select
          id="targetLanguage"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          className="select-language w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="af">Afrikaans</option>
          <option value="sq">Albanian</option>
          <option value="am">Amharic</option>
          <option value="ar">Arabic</option>
          <option value="hy">Armenian</option>
          <option value="az">Azerbaijani</option>
          <option value="eu">Basque</option>
          <option value="be">Belarusian</option>
          <option value="bn">Bengali</option>
          <option value="bs">Bosnian</option>
          <option value="bg">Bulgarian</option>
          <option value="ca">Catalan</option>
          <option value="ceb">Cebuano</option>
          <option value="ny">Chichewa</option>
          <option value="zh-CN">Chinese (Simplified)</option>
          <option value="zh-TW">Chinese (Traditional)</option>
          <option value="co">Corsican</option>
          <option value="hr">Croatian</option>
          <option value="cs">Czech</option>
          <option value="da">Danish</option>
          <option value="nl">Dutch</option>
          <option value="en">English</option>
          <option value="eo">Esperanto</option>
          <option value="et">Estonian</option>
          <option value="tl">Filipino</option>
          <option value="fi">Finnish</option>
          <option value="fr">French</option>
          <option value="fy">Frisian</option>
          <option value="gl">Galician</option>
          <option value="ka">Georgian</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="gu">Gujarati</option>
          <option value="ht">Haitian Creole</option>
          <option value="ha">Hausa</option>
          <option value="haw">Hawaiian</option>
          <option value="iw">Hebrew</option>
          <option value="hi">Hindi</option>
          <option value="hmn">Hmong</option>
          <option value="hu">Hungarian</option>
          <option value="is">Icelandic</option>
          <option value="ig">Igbo</option>
          <option value="id">Indonesian</option>
          <option value="ga">Irish</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="jw">Javanese</option>
          <option value="kn">Kannada</option>
          <option value="kk">Kazakh</option>
          <option value="km">Khmer</option>
          <option value="ko">Korean</option>
          <option value="ku">Kurdish (Kurmanji)</option>
          <option value="ky">Kyrgyz</option>
          <option value="lo">Lao</option>
          <option value="la">Latin</option>
          <option value="lv">Latvian</option>
          <option value="lt">Lithuanian</option>
          <option value="lb">Luxembourgish</option>
          <option value="mk">Macedonian</option>
          <option value="mg">Malagasy</option>
          <option value="ms">Malay</option>
          <option value="ml">Malayalam</option>
          <option value="mt">Maltese</option>
          <option value="mi">Maori</option>
          <option value="mr">Marathi</option>
          <option value="mn">Mongolian</option>
          <option value="my">Myanmar (Burmese)</option>
          <option value="ne">Nepali</option>
          <option value="no">Norwegian</option>
          <option value="or">Odia (Oriya)</option>
          <option value="ps">Pashto</option>
          <option value="fa">Persian</option>
          <option value="pl">Polish</option>
          <option value="pt">Portuguese</option>
          <option value="pa">Punjabi</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="sm">Samoan</option>
          <option value="gd">Scots Gaelic</option>
          <option value="sr">Serbian</option>
          <option value="st">Sesotho</option>
          <option value="sn">Shona</option>
          <option value="sd">Sindhi</option>
          <option value="si">Sinhala</option>
          <option value="sk">Slovak</option>
          <option value="sl">Slovenian</option>
          <option value="so">Somali</option>
          <option value="es">Spanish</option>
          <option value="su">Sundanese</option>
          <option value="sw">Swahili</option>
          <option value="sv">Swedish</option>
          <option value="tg">Tajik</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="th">Thai</option>
          <option value="tr">Turkish</option>
          <option value="uk">Ukrainian</option>
          <option value="ur">Urdu</option>
          <option value="ug">Uyghur</option>
          <option value="uz">Uzbek</option>
          <option value="vi">Vietnamese</option>
          <option value="cy">Welsh</option>
          <option value="xh">Xhosa</option>
          <option value="yi">Yiddish</option>
          <option value="yo">Yoruba</option>
          <option value="zu">Zulu</option>
        </select>
      </div>
      <div id="translationResult" className="bg-gray-200 p-4 rounded-md">
        {translationResult}
      </div>
    </div>
  );
}

export default TranslationApp;
