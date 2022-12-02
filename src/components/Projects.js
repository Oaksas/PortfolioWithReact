import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import project_motherbet from "../assets/img/project_motherbet.png";
import projectCrypto from "../assets/img/project_crypto.jpg";
import projectBet from "../assets/img/project_bet.jpg";
import projectMedia from "../assets/img/project_media.png";
import projectAddweb from "../assets/img/project_addweb.png";
import projectAI from "../assets/img/project_AI.png";
import projectGallery from "../assets/img/project_gallery.png";
import projectBank from "../assets/img/project_bank.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Tourvado",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Media Agency",
      description: "Design & Development",
      imgUrl: projectMedia,
    },
    {
      title: "Crypto Admin Dashboard",
      description: "Design & Development",
      imgUrl: projectCrypto,
    },
    {
      title: "Mother Bet",
      description: "Design & Development",
      imgUrl: project_motherbet,
    },
    {
      title: "College Consultancy Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Company Website",
      description: "Development",
      imgUrl: projectAddweb,
    },
    {
      title: "Kings Bet",
      description: "Design & Development",
      imgUrl: projectBet,
    },
  ];
  const projects2 = [
    {
      title: "GPT-3 AI Future",
      description: "Development",
      imgUrl: projectAI,
    },
    {
      title: "Digital Gallery",
      description: "Development",
      imgUrl: projectGallery,
    },
    {
      title: "Oaksas Bank",
      description: "Development",
      imgUrl: projectBank,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Some of my recent projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"> 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__flip " : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Comming Soon ...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
