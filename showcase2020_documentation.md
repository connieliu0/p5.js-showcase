# GSoC Showcase 2.0. Documentation

The p5.js [showcase](https://p5js.org/showcase/) can be maintained in the following way. Currently, contributors can nominate themselves through this [form](https://forms.gle/SKJdvBNKRo4o8Rh9A) which is a apart of the p5.js google drive. If you wish to be the maintainer/co-maintainer for the showcase for the year, please email the Processing Foundation for further directions and access to the form results. The handling and recruitment for the showcase is currently done with GSoC and will vary year to year.

Current maintainer: [Katie Chan](https://katiechan.cargo.site) 

Past maintainers: [Connie Liu](https://connieliu0.github.io/#/), [Ashley Kang](https://ashleykang.dev/)

Please contact them if you have questions!

NOTE: There should be a general understanding in HTML and CSS and using Github via the Terminal before following this tutorial. React understanding is also encouraged for making modifications, but is not required for adding translations

# Table of Contents

- [`Setting up the Repo`](#Setting-Up-the-Repo)
- [`Overall Understanding of the Structure`](#overall-understanding-of-the-structure)
- [`Form to JSON Data`](#Form-to-JSON-Data) 
- [`Adding i18next translations`](#Adding-i18next-translations) 
- [`Finishing Up`](#Finishing-Up)

# Setting up the Repo

The p5.js showcase is currently a separate codebase than the main p5.js website. The p5.js showcase is made using React.js, i18next, chart.js, mappa.js, and a little bit of d3.js for the various visualizations.

 In order to clone a git repo, make sure to open up terminal on your machine. Make sure you have node installed and at least version 8.16.0 or 10.16.0 or later. To learn how to access files via terminal, view [this](https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/). If you don't have a Mac, you can access the terminal via Windows [here](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701#activetab=pivot:overviewtab).

To edit the files you can use the code editor of your choice, for this tutorial I'm using Microsoft [Visual Studio Code](https://code.visualstudio.com/)

# Overall Understanding of the Structure

This site is bootstrapped with create-react-app and primarily uses the following npms: 

- **react-router-dom**: to route all the pages and provide custom link to specific showcase entry pages via the id label
- **react-i18next**: to provide direct translation from one language to another via shared json keys
- **react-markdown**: to allow websites to be linked directly through the JSON data
- **gh-pages**: for connecting to be hosted with github-pages

The data for the show-case can be found under [src>locales](https://github.com/connieliu0/p5.js-showcase/tree/master/src/locales) in which there are two files - en, es, and zh-Hans. These files are then imported to i18n.js ([src > i18n.js](https://github.com/connieliu0/p5.js-showcase/blob/master/src/i18n.js)) to be used and swapped out depending on the language the user sets the site to be. There is also a json file for tools ([src > data > tools.json](https://github.com/connieliu0/p5.js-showcase/tree/master/src/data)) these are the links for each "tool" used in the user's project (these are the functions/libraries used). Then the user just needs to type the tool name and **not the link** in the showcase en/es jsons and the link will be automatically provided by tools.json.

To summarize - the design is implemented through the js files through React components and classes and the data is filled in from the json files.

# Form to JSON Data

In order to translate results from the p5.js 2020 showcase form to a format that can be added to translations.json do the following steps:

1. Open your Google Form as a spread sheet

![Form](showcase2020/Untitled.png)

2. When you've opened it as a Google Sheets, make a copy of it and then delete any rows of information you don't need (entries that did not make the cut), also edit responses as needed

Rename the labels to what you want your JSON keys to be:

![Spreadsheet header](showcase2020/Untitled%201.png)

![JSON](showcase2020/Untitled%202.png)

For example, in our JSON files, if you want the name key to be called "name", make sure to change the corresponding header in the google sheets. Then delete irrelevant columns (for example time submitted).

Then, download it as a csv

![Download as CSV](showcase2020/Untitled%203.png)

3. We are going to use [https://csvjson.com/csv2json](https://csvjson.com/csv2json). Upload the csv to this site and then copy and paste the json into the showcase json file. All done!

### Adding links in the JSON value entry

If you want to manually insert a link into someone's answer for the Q and A, we will be using the react-markdown NPM

1. Because we are using react-markdown, inserting a link will be the same as it is in markdown. Put a bracket around the word that will have the link, then put the link in the parenthesis.

![JSON](showcase2020/Untitled%204.png)

2. For this example, then in **Details.js**  insert it in by adding <Markdown source ={json key}/> If there is an error, make sure to add var Markdown = require('react-markdown'); or that it exists in the document

![Markdown source](showcase2020/Untitled%205.png)

# Adding i18next translations

Currently translations are implemented with the [useTranslation](https://react.i18next.com/latest/usetranslation-hook) hook. Basically, the key in the JSON file is marked with the blue text. In the JS file, the value (orange) is inserted into the webpage via referencing the JSON key in the brackets. You can see here how AboutIntro matches up with the JSON file.

![translation1](showcase2020/Untitled%206.png)

![translation2](showcase2020/Untitled%207.png)

To add translations in, for example, spanish, navigate to src>locales and then to the translation.json file under the designated folder. Then copy and paste the additional untranslated JSON code into the translation.json file so it's exactly the same as the en>translation.json file. Then add your translations in to the appropriate values under the key-value pair.

![translation.json](showcase2020/Untitled%208.png)

### Adding Languages

To add languages, add a corresponding file under locales - for example Chinese would be src>locales>zh>translation.json

Then under the i18n.js json file, import zh from './locales/zh/translation.json

![import language](showcase2020/Untitled%209.png)

Then add 'zh' under whitelist, and under resources:

zh:{translations:zh}

![init](showcase2020/Untitled%2010.png)

Then, under buttons in App.js add <button onClick={() ⇒changeLanguage('zh')}>zh</button> to add a way to change functionality

![button onclick](showcase2020/Untitled%2011.png)

# Finishing Up

In order to make sure that translations are working test your website with npm run start in the terminal and then clicking on the change language buttons in the navigation bar and seeing if the text changes. If there's an error, common mistakes are that the keys are not parallel across translation.json files. Then when you're done, submit a pull request to add the translations.