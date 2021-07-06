import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


Modal.setAppElement("#root");

const News = () => {
  const initialCodeString = `
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
  }`;

  const extensionString = `
  {
    "recommendations": [
      "mikael.angular-beastcode",
      "angular.ng-template",
      "coenraads.bracket-pair-colorizer",
      "mikestead.dotenv",
      "dsznajder.es7-react-js-snippets",
      "dbaeumer.vscode-eslint",
      "mkxml.vscode-filesize",
      "ritwickdey.liveserver",
      "davidanson.vscode-markdownlint",
      "pkief.material-icon-theme",
      "zhuangtongfa.material-theme",
      "esbenp.prettier-vscode",
      "syler.sass-indented",
      "octref.vetur",
      "ms-vscode.vscode-typescript-tslint-plugin",
      "visualstudioexptteam.vscodeintellicode",
      "formulahendry.code-runner"
    ]
  }`;

  const editorConfigString = `
  [*]
  end_of_line = lf
  indent_style = space
  indent_size = 2`;

  const packageJsonString =`
  "lint": "eslint --ext js,jsx,ts,tsx src/",
  "lint:fix": "eslint --fix --ext js,jsx,ts,tsx src/",
  "prettier": "prettier --check "src/**/(*.tsx|*.ts|*.jsx|*.js|*.scss|*.css)"",
  "prettier:fix": "prettier --write "src/**/(*.tsx|*.ts|*.jsx|*.js|*.scss|*.css)""
  `;

  const prettierString = `
  {
    "arrowParens": "avoid",
    "semi": false,
    "trailingComma": "none",
    "endOfLine": "lf",
    "tabWidth": 2,
    "printWidth": 80,
    "useTabs": false
  }
  `;

  const prettierignorgeString = `
  .cache
   package-lock.json
  `;

  const eslintrcString = `
  {
    "extends": ["react-app", "prettier"],
    "plugins": ["react", "prettier"],
    "rules": {
      "prettier/prettier": [
        "warn",
        {
          "arrowParens": "avoid",
          "semi": false,
          "trailingComma": "none",
          "endOfLine": "lf",
          "tabWidth": 2,
          "printWidth": 80,
          "useTabs": false
        }
      ],
      "no-console": "warn"
    }
  }
  `;

  const eslintignoreString = `
  /src/serviceWorker.js
  /src/setupTests.js.js
  `;

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>News</span>
              <h3>Latest News</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/1.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href>Anh Ben</a>
                    <span>06 Jul 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                How to setup environment performance in React
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne} href>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/1.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                        <p className="date">
                            By <a href>Anh Ben</a>
                            <span>05 April 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                        How to setup environment performance in React: VS code, Prettier, ESLint
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                          Setting the environment to code is something that many new coders often ignore because it is quite cumbersome. But believe me, once installed, you will be very happy to code. The reason I choose Visual Studio Code as my editor is because it's free 😳 , fully functional and trusted by many people from newbie to pro. Enough rambling, let's get to the main point.
                          </p>

                        <div className="content">
                          <h4 className="heading4 pt--10 pb--20">1. Visual Studio Code Setting</h4>
                          <h5 className="pb--20">Essential Extensions for Visual Studio Code when coding React</h5>
                          
                          <ul>
                            <li><strong>Atom One Dark Theme</strong>: Atom theme for VSCode, much nicer than default theme. Code inspiration</li>
                            <li><strong>Auto Close Tag</strong>: Auto close tag in code HTML, JSX</li>
                            <li><strong>Auto Rename Tag</strong>: Automatically rename tags when coding HTML, JSX. Combined with Auto Close Tag will make a great duo</li>
                            <li><strong>Bookmarks</strong>: Highlight lines of code for easy searching. When your code is long, having to scroll up, scroll down to find and code is quite tiring. Now just mark the location, then you just need to point to that location and the editor will open right at the bookmark position.</li>
                            <li><strong>Bracket Pair Colorizer</strong>: Help distinguish the {} when it becomes too much</li>
                            <li><strong>Code Spelling Checker</strong>: Check spelling when coding (English only)</li>
                            <li><strong>EditorConfig</strong>: To run the .editorconfig file, which is very convenient, I will talk about this file below</li>
                            <li><strong>ES7 React/Redux/React-Native/JS snippets</strong>: Snippet for React, Redux</li>
                            <li><strong>ESLint:</strong> ESLint for editor</li>
                            <li><strong>GitLens</strong>: Manage code better with git, show file changers, commits, etc.</li>
                            <li><strong>html to JSX</strong>: Convert HTML to JSX</li>
                            <li><strong>Live Server</strong>: Make the server auto reload when the html code is static</li>
                            <li><strong>Material Icon Theme</strong>: Add theme icons for files and folders to help you identify files quickly</li>
                            <li><strong>Prettier</strong>: Format code beautiful and genuine</li>
                            <li><strong>SVG Viewer</strong>: View svg images on editor</li>
                            <li><strong>VSCode-styled-components</strong>: Highlight and auto-complete for styled-component like when coding on css file</li>

                          </ul>
                        </div>    

                        <div className="content">
                          <h4 className="heading4 pt--10 pb--20">2. Setup Workspace</h4>
                          
                          <p> For those of you who don't know, VS Code has 2 types of settings, one is for the user, the other is for the workspace. If you do not set the workspace, by default VS Code will get the settings in the user. In this article, we only set the workspace.</p>
                          <p>And setting also has 2 ways of setting, 1 is setting by JSON file, 2 is by UI. Here, I set it up with a JSON file to make it easier to see. Create file <code>./vscode/settings.json</code>  in home directory</p>
                          
                          <SyntaxHighlighter language="json" style={dark} children={initialCodeString}/>

                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p> IN_WHICH </p>
                            <ul>
                              <li>We choose <strong>Default Formatter</strong> as <strong>Prettier.</strong></li>
                              <li><code>"editor.formatOnSave: true"</code>so that when saving, it will automatically format (with <strong>ESLint</strong> or with <strong>Prettier</strong>, as we have defined above)</li>
                              <li><code>"eslint.format.enable: true"</code> to enable <strong>ESLint's</strong> code formatting feature</li>
                              <li><code>"source.fixAll.eslint": true</code> so that when you save it <strong>ESLint</strong> will automatically format and fix errors <strong>ESLint</strong> for us.</li>
                            </ul>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>Add more <strong>recommended extension</strong> into workspace, so that when anyone opens the source code, VS Code will recommend installing these extensions. You need add more file <code>extensions.json</code> in folder <code>.vscode</code>. These are the extensions I just listed above, you just need to copy this file and put it in the source, the editor will display the <code>recommended extension</code>, no need to search for each one.</p>
                          
                          <SyntaxHighlighter language="json" style={dark} children={extensionString}/>
                          
                          <p>
                          When working in Teams, to unify extensions and settings among members, we should share the <code>.vscode</code> folder (just leave it in the source, don't put it in <code>.gitignore</code> ).
                          </p>
                        </div> 
                        
                        <div className="content">
                          <h4 className="heading4 pt--10 pb--20">3. Add file .editorconfig</h4>
                          
                          <p>If you do not know, <strong>EditorConfig</strong> was born to unify standards between different editors. For example, someone use <strong>indent</strong> as <strong>space</strong>, someone use <strong>tab</strong>; someone <strong>indent </strong>2, others 4. <strong>EditorConfig</strong> makes our code more consistent, readable and maintainable.</p>
                          <p>You create the file <code>.editorconfig</code> in the main directory of the project. Because we already have the <strong>Editor Config</strong> extension installed above, when we create this file, the browser will automatically receive these settings.</p>
                          
                          <SyntaxHighlighter language="editorconfig" style={dark} children={editorConfigString}/>
                        </div>

                        <div className="content">
                          <h4 className="heading4 pt--10 pb--20">4. Install ESLint and Prettier for React</h4>
                          <p>Here I use 
                            <a href="https://create-react-app.dev" data-wpel-link="external" rel="external noopener noreferrer"> Create React App</a>
                            , so by default, people have already installed the basic 
                            <a href="https://create-react-app.dev/docs/setting-up-your-editor/#experimental-extending-the-eslint-config" data-wpel-link="external" rel="external noopener noreferrer"> ESLint suite</a>
                            , I just need to install a few more things and the project will be smooth. Please follow the steps below
                          </p>
                          <p>Create a <code>.env</code> file in the root directory and add this value to <code>EXTEND_ESLINT=true</code>. The purpose is to make it possible for us to add other linters to <strong>React</strong>.</p>
                          <p>Install the following package <code>npm i prettier eslint-config-prettier eslint-plugin-prettier -D</code></p>
                          <p>Add this script in <code>package.json</code> (scripts section). Here I use <strong>Typescript</strong> and maybe <strong>Javascript</strong>, so I set it as <code>js, jsx, ts, tsx</code></p>
                          
                          <SyntaxHighlighter language="json" style={dark} children={packageJsonString}/>

                          <p>With the above commands, we just need to <code>npm lint</code> and <strong>eslint</strong> will scan the entire project for errors, <code>npm lint:fix</code> will automatically fix the entire project. Similar to prettier</p>
                          
                          <p>Create the file <code>.prettierrc</code>. This file specifies the rules for <strong>Prettier</strong></p>
                          <SyntaxHighlighter language="json" style={dark} children={prettierString}/>

                          <p>Create a <code>.prettierignore</code> file. This file tells <strong>Prettier</strong> not to format at the paths specified here</p>
                          <SyntaxHighlighter language="ignore" style={dark} children={prettierignorgeString}/>
                          
                          <p>Create <code>.eslintrc</code> file. This file is intended to extend the <strong>ESLint</strong> React configuration to help catch errors on the terminal, if you have installed the <strong>ESLint</strong> extension, it will rely on this file to catch errors directly on the editor.</p>
                          <SyntaxHighlighter language="json" style={dark} children={eslintrcString}/>

                          <p>We have added some <strong>Prettier</strong> rules as entered in <code>.prettierrc</code> to <strong>ESLint</strong> so that <strong>ESLint</strong> catches errors in case we forget to format</p>
                          <SyntaxHighlighter language="ignore" style={dark} children={eslintignoreString}/>

                        </div>


                        <div className="content">
                          <h3 className="title pt--20 pb--20">In Summary</h3>
                          <p>That's it, above is the configuration that I use for my current React projects. Hope to make your project cleaner and smoother. You can change some places to suit your own style, not necessarily exactly the same 😆</p>
                          <p>In the next post, I will go into the analysis of the best practice React folder structure. Have a nice weekend everyone</p>
                          <p>Link Github:&nbsp;<a href="https://github.com/nguyenvuhoang/React-Folder-Structure" rel="external noopener noreferrer" data-wpel-link="external">https://github.com/nguyenvuhoang/React-Folder-Structure</a></p>
                        </div>  

                        


                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href>Anh Ben</a>
                    <span>22 March 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                  Sony announced two new full frame cameras with zero fanfare
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwo} href>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/2.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href>Anh Ben</a>
                            <span>22 March 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Sony announced two new full frame cameras with zero
                          fanfare
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/3.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href>Anh Ben</a>
                    <span>15 Feb 2021</span>
                  </p>
                </div>

                <h3 className="title" onClick={toggleModalThree}>
                  Why every photographer should shoot film, even in 2021
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalThree} href>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/3.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href>Anh Ben</a>
                            <span>15 Feb 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Why every photographer should shoot film, even in 2021
                        </h3>
                      </div>
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quore"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SCCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalFour}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/4.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href>Kevin Stone</a>
                    <span>22 Jan 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalFour}>
                  Stay creative in lockdown with these fun photo projects
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFour} href>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/4.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}

                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">Kevin Stone</a>
                            <span>22 Jan 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Stay creative in lockdown with these fun photo
                          projects
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;
