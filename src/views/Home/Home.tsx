import React, { useState, useEffect } from 'react';
import './home.scss';

interface WorkInfo {
  title: string;
  description: string;
  stack: Array<string>;
  image_main: string;
  images: Array<string>;
}

interface HomeState {
  work: Array<WorkInfo>;
  loading: Boolean;
}

const mockData: WorkInfo[] = [
  {
    title: 'HairCareDNA',
    description: 'Web application which helps you choose your next hair care product in a much more profound way.',
    stack: ['React', 'Redux', 'Node.js'],
    image_main: 'https://www.cssdesignawards.com/cdasites/2019/201901/20190120013821.jpg',
    images: []
  },
  {
    title: 'HairCareDNA',
    description: 'Web application which helps you choose your next hair care product in a much more profound way.',
    stack: ['React', 'Redux', 'Node.js'],
    image_main: 'https://www.cssdesignawards.com/cdasites/2019/201901/20190120013821.jpg',
    images: []
  },
  {
    title: 'HairCareDNA',
    description: 'Web application which helps you choose your next hair care product in a much more profound way.',
    stack: ['React', 'Redux', 'Node.js'],
    image_main: 'https://www.cssdesignawards.com/cdasites/2019/201901/20190120013821.jpg',
    images: []
  },
  {
    title: 'HairCareDNA',
    description: 'Web application which helps you choose your next hair care product in a much more profound way.',
    stack: ['React', 'Redux', 'Node.js'],
    image_main: 'https://www.cssdesignawards.com/cdasites/2019/201901/20190120013821.jpg',
    images: []
  }
];

const Home = props => {
  const [state, setState] = useState<HomeState>({work: [], loading: true});

  const [position, setPosition] = useState(window.pageXOffset);

  // vertical scroll
  useEffect(() => {
    let sDiv = document.getElementById('verticalScroll');
    let verticalScroll = (e) => {
      sDiv.scrollBy(- e.wheelDelta / 2, 0);
    }
    window.addEventListener('mousewheel', verticalScroll);
    return () => {
      window.removeEventListener('mousewheel', verticalScroll);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setState({work: mockData, loading: false});
    }, 500);
  }, []);
  const { loading, work } = state;
  console.log(loading, work);

  return (
    <div id="verticalScroll">
      { loading ? <p>Loading...</p> :
        work.map((job, key) => 
          <div className="work" key={key}>
            <img src={job.image_main} />
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
        )
      }
    </div>
  );
};

export default Home;