import React from "react"
import "./About.css"
import "../../PageHeader/PageHeader.css"
import img1 from "./img1.png"
import ProjectCard from "../Work/ProjectCard/ProjectCard"
import { Icon, Divider } from "semantic-ui-react"

export default class About extends React.Component {
  render() {
    const aboutText = (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
    if (this.props.isMobile) {
      return (
        <div id='about-container'>
          <div className='about-title'>About Me</div>
          <div className='about-content'>
            <div className='about-table'>{aboutText}</div>
            <ProjectCard
              title='Contact Information'
              size='normal'
              date='Get in touch with me'
              details={[
                [<Icon name='mail' circular />, " loremus99@gmail.com"],
                [
                  <Icon name='linkedin' circular />,
                  <a
                    href='https://www.linkedin.com/in/loremus99/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {" "}
                    /in/loremus99/
                  </a>
                ],
                [
                  <Icon name='facebook' circular />,
                  <a
                    href='https://www.facebook.com/lorem1999'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {" "}
                    /lorem1999
                  </a>
                ],
                [<Icon name='snapchat ghost' circular />, "loremus99"]
              ]}
              noBullets={true}
            />
          </div>
          <Divider />
        </div>
      )
    } else {
      return (
        <div id='about-container'>
          <div className='about-title'>About Me</div>
          <div className='about-content'>
            <div className='about-table'>
              <div style={{ paddingRight: "5em" }}>{aboutText}</div>
              <img id='header-image' src='https://via.placeholder.com/300' /> <br />
            </div>
            <ProjectCard
              title='Contact Information'
              size='normal'
              date='Get in touch with me'
              details={[
                [<Icon name='mail' circular />, " loremus99@gmail.com"],
                [
                  <Icon name='linkedin' circular />,
                  <a
                  href='https://www.linkedin.com/in/loremus99/'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                    {" "}
                    /in/loremus99/
                  </a>
                ],
                [
                  <Icon name='facebook' circular />,
                  <a
                  href='https://www.facebook.com/lorem1999'
                  target='_blank'
                  rel='noopener noreferrer'
                  >
                    {" "}
                    /lorem1999
                  </a>
                ],
                [<Icon name='instagram' circular />, " _lorem"],
                [<Icon name='snapchat ghost' circular />, " loremus99"]
              ]}
              noBullets={true}
            />
          </div>
        </div>
      )
    }
  }
}
