import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    if (this.props.data) {
      var realProjects = this.props.data.realProjects.map(function (project) {
        // return <div key={project.title}><h3>{project.title}</h3>
        //   {/* <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p> */}
        //   <p>{project.description}</p></div>

        let description = project.description.split('\n').map((item, i) => <p key={i}>{item}</p>);

        return (
          <div className="row education">
            <div className="three columns header-col">
              <span>
                {project.video ?
                  <iframe title={project.title}
                    width="202.5"
                    height="438.75"
                    src={project.video}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe> :
                  <h6> </h6>
                }
              </span>
            </div>
            <div className="nine columns main-col">
              <div key={project.title}><h3>{project.title}</h3>
                <p className="date">{project.tech}</p>
                <p>{description}</p></div>
            </div>
          </div>

        );
      });

    }

    return (
      //     <div className="row education">
      //     <div className="three columns header-col">
      //        <h1><span>Education</span></h1>
      //     </div>

      //     <div className="nine columns main-col">
      //        <div className="row item">
      //           <div className="twelve columns">
      //             {education}
      //           </div>
      //        </div>
      //     </div>
      //  </div>
      <section id="portfolio">

        <div className="row">

          <h1>Check Out Some of My Works.</h1>

          {/* <div className="row education"> */}
          {/* <div className="three columns header-col">
                <span>
                  <iframe title='Nurse Connect'
                    width="202.5"
                    height="438.75"
                    src="https://www.youtube.com/embed/NISSqyd-p-k"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>

                  </iframe>
                </span>
              </div> */}

          {/* <div className="nine columns main-col"> */}
          {/* <div className="row item"> */}
          {/* <div className="twelve columns"> */}
          {realProjects}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}


        </div>
      </section>
    );
  }
}

export default Portfolio;
