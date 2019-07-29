import React from 'react'


const IE11Warning = (saveWarning, ignoreWarning) => (
    <section>
        <h5>It looks like you're using a version of Internet Explorer</h5>

        <p>You're seeing this because movieMap thinks you're using a web browser called Internet Explorer.  Internet Explorer - or IE - is largely outdated and considered by most in the Web industry to be the least reliable of all browsers.  <strong>It's creators, Microsoft, no longer actively support it.</strong>  While it is safe and functioning, this lack of support has meant that IE has not been made current with the last ~5 years of Web technology advancements.  Many of these advancements are present within movieMap, and many other websites you use on a day to day basis.</p>

        <p>Luckily, we do have workarounds for these issues.  We have made every attempt possible to implement these and make movieMap enjoyable for any and all browsers.  <strong>That being said, we cannot guarantee that every aspect of movieMap will work correctly on IE.</strong>  With this being a passion project, we simply do not have the time to do full QA passes on IE, which as of June 2019 only has 3.06% of global market share.</p>

        <h6>Here are some Web Browsers that are trusted and modern:</h6>
        <ul>
            <li>
                <a href="https://www.google.ca/chrome/?brand=CHBD&gclid=EAIaIQobChMIjuOXpcPG4wIVwp6zCh385QsWEAAYASAAEgJye_D_BwE&gclsrc=aw.ds" target="_blank">Google Chrome</a>
            </li>
            <li>
                <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">Google Chrome</a>
            </li>
            <li>
                <a href="https://www.microsoft.com/en-ca/windows/microsoft-edge" target="_blank">Microsoft Edge (IE's replacement)</a>
            </li>
        </ul>

        <div>
            <button onClick={() => saveWarning}>I'm not using IE, this is a mistake and I'm using a different Browser.</button>
            <button onClick={() => ignoreWarning}>I'm using IE but want to try movieMap anyways.</button>
            <button onClick={() => saveWarning}>I'm using IE and have no plans to change.  Don't show me this next time.</button>
        </div>
    </section>
)

export default IE11Warning