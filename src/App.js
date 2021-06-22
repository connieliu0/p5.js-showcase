import "./styles/App.css";
import React, { useState, useEffect } from "react";
import Details from "./Details.js"
import Details2020 from "./Details2020.js"
import { useTranslation, Trans } from "react-i18next";
import i18next from 'i18next';
import TestCard from "./TestCard.js";
import { Bar } from 'react-chartjs-2';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch.js'
import Simple from './simple';
import GraphButton from './GraphButton';
import GalleryTwenty from './GalleryTwenty.js';
import ScrollToTop from './ScrollToTop.js'
import { HashLink } from 'react-router-hash-link';
import {
  Switch,
  Route,
  Link,
  useParams,
  HashRouter,
} from "react-router-dom";
import Analytics from 'react-router-ga';
import FilterButton from "./FilterButton";
export default function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <HashRouter basename='/'>
      <div className="navigation">
        <div className="left">
          <Link to="/" className="item">Foreword</Link>
          <Link to="/2020-All" className="item">Gallery</Link>
          <Link to="/archive" className="item">Archive</Link>
          <Link to="/about" className="item">About</Link>
          <a href="https://p5js.org">p5.js</a>
        </div>
        <div className="right">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
          <button onClick={() => changeLanguage('zh_Hans')}>简体中文</button>
          <button onClick={() => changeLanguage('ko')}>한국어</button>
        </div>
      </div>
      <Switch>
        <Analytics id="UA-175461618-2" debug>
          <Route exact path="/" children={<Gallerytwenty />} />
          <Route exact path="/archive" children={<Archive />} />
          <Route exact path="/2019/:id" children={<DetailedPage />} />
          <Route exact path="/2020-:filter/" children={<GalleryTwenty />} />
          <Route exact path="/2020-:filter/:id" children={<Detailed2020Page />} />
          <Route exact path="/about" children={<About />} />
        </Analytics>
      </Switch>{" "}
    </HashRouter>
  );
}

function About() {
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation();
  return (
    <div className="home">
      <h1><img src={process.env.PUBLIC_URL + '/images/asterisk-01-01.png'} alt="p5.js asterisk" />
        {t('About1')}</h1>
      <h3><Markdown source={t('Answer1')} /></h3>
      <h1><img src={process.env.PUBLIC_URL + '/images/asterisk-01-01.png'} alt="p5.js asterisk" />
        {t('About2')}</h1>
      <h3><Markdown source={t('Answer2')} /></h3>
      <h1><img src={process.env.PUBLIC_URL + '/images/asterisk-01-01.png'} alt="p5.js asterisk" />{t('About3')}</h1>
      <h3><Markdown source={t('Answer3')} /></h3>
      <h1><img src={process.env.PUBLIC_URL + '/images/asterisk-01-01.png'} alt="p5.js asterisk" />{t('Acknowledgements')}</h1>
      <h3><Markdown source={t('Acknowledgements_Description')} /></h3>
    </div>
  );
}

function Archive() {
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation();
  ScrollToTop();
  return (
    <div className="body">
      <div className="gallery">
        <div id="intro2019">
        <h1>Archive</h1>
        <h3><Markdown source={t('Archiveabout')} /></h3>
        <div class="row">
          {t('archive', { returnObjects: true }).map(({ id, title, author, description, image }) => (
            <Link
              key={id}
              to={{
                pathname: `/archive/${id}/`,
              }}
            >
              <TestCard key={`card-${id}`}
                id={id}
                title={title}
                author={author}
                description={description}
                image={image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}


function Gallerynineteen() {
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation();
  ScrollToTop();
  return (
    <div className="body">
      <div className="gallery">
        <div id="intro2019">
        <h1>p5.js 2019 Showcase!</h1>
        <h3><Markdown source={t('2019about')} /></h3>
        <div class="row">
          {t('showcase2019', { returnObjects: true }).map(({ id, title, author, description, image }) => (
            <Link
              key={id}
              to={{
                pathname: `/2019/${id}/`,
              }}
            >
              <TestCard key={`card-${id}`}
                id={id}
                title={title}
                author={author}
                description={description}
                image={image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

function Gallerytwenty() {
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation();
  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (label, index, labels) {
              return label + '%';
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Percentage'
          }
        }
      ]
    }
  };
  const data1 = {
    labels: ['Independently', 'Taught in Formal Degree'],
    datasets: [
      {
        label: 'Experience Learning p5.js',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [83.6, 16.4],
      }
    ]
  };
  const data2 = {
    labels: ['0-2 yrs', '2-5 yrs', '5+ yrs'],
    datasets: [
      {
        label: 'Years Spent Coding',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [41, 29.5, 29.5]
      }
    ]
  };
  const [graph1Displayed, showGraph1] = useState(true);
  const [graph2Displayed, showGraph2] = useState(false);
  return (
    <div className="body">
      <div className="2021notice">
      <div class="gradient-border" id="box">
      <h3>{t('2021_notice1')}</h3>
      </div>
      <div className="cover2020">
        <div className="flex">
          <div className="column">
            <h1>{t('Welcome')}</h1>
            <p><em>{t('Created By')} Katie Chan</em></p>
            <h2>{t('Jump to')} <HashLink smooth to="#twentyviz">{t('Visualizations')}</HashLink> | <Link to="/2020-All">{t('Projects')}</Link></h2>
            <HashLink smooth to="#twentyviz"><img className="downarrow" src={process.env.PUBLIC_URL + '/down.svg'} alt="p5.js down arrow" /></HashLink>

          </div>
          <div className="column">
            <div class="gradient-border" id="box">
              <h3>{t('2020_intro1')}</h3>
              <h3><Markdown source={t('2020_intro1.5')} /></h3>
              <h2><HashLink smooth to="#twentyviz"><Markdown source={t('2020_intro2')} /></HashLink></h2>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="twentyviz" id="twentyviz">
        <div className="flex column">
          <h1>{t('Viz1')}</h1>
          <p><em>{t('Directionsmap')}</em></p>
        </div>
        <Simple />
        <h1 className="tenpx">{t('Viz2')}</h1>
        <div className="flex">
          <div className="column">
            <p><em>{t('Directions')}</em></p>
            <GraphButton
              id="graph1"
              className={graph2Displayed === false ? 'active' : ''}
              buttonname={t("viz2.1")}
              showGraph={showGraph1}
              otherGraph={showGraph2}
            />
            <h2><em>...{t("viz2.2")}</em></h2>
            <GraphButton
              id="graph2"
              buttonname={t("viz2.3")}
              className={graph1Displayed === false ? 'active' : ''}
              showGraph={showGraph2}
              otherGraph={showGraph1}
            />
          </div>
          <div className="column">
            {graph1Displayed &&
              <Bar
                data={data1}
                width={100}
                height={280}
                options={options}
              />}
            {graph2Displayed &&
              <Bar
                data={data2}
                width={100}
                height={280}
                options={options}
              />
            }
          </div>
        </div>
        <div id="viz3" className="column">
          <h1>{t('Viz3')}</h1>
          <div className="flex"><p><em>{t('Directions2')}</em></p></div>
          <div id="P5Wrapper" style={{ position: 'relative' }}>
            <P5Wrapper sketch={sketch} />
          </div>
          <h1>
            <Link to="/2020-All">{t('Viz4')}</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

function DetailedPage() {
  let { id } = useParams();
  let entries = i18next.t('showcase2019', { returnObjects: true });
  let piece = entries.find(x => x.id === id);

  if (!piece) return <div>Image not found</div>;

  return (
    <Details
      piece={piece}
    />
  );
}

function Detailed2020Page() {
  let { id, filter } = useParams();
  let entries = i18next.t('showcase2020', { returnObjects: true });
  let piece = entries.find(x => x.id === id);

  if (!piece) return <div>Image not found</div>;

  return (
    <Details2020
      filter={filter}
      piece={piece}
    />
  );
}