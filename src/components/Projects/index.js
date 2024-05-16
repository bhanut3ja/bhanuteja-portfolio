import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Some Projects are not mentioned due to terms and conditions. Here are some of my projects.
        </Desc>
        <Desc>
        <h5>Note : - If Application is not opening that means clients stopped their online services</h5>
         
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'wordpress' ?
            <ToggleButton active value="wordpress" onClick={() => setToggle('wordpress')}>WordPress</ToggleButton>
            :
            <ToggleButton value="wordpress" onClick={() => setToggle('wordpress')}>WordPress</ToggleButton>
          }
          {/* <Divider />
          {toggle === 'react' ?
            <ToggleButton active value="react" onClick={() => setToggle('react')}>React</ToggleButton>
            :
            <ToggleButton value="react" onClick={() => setToggle('react')}>React</ToggleButton>
          } */}
          
          <Divider />
          {toggle === 'php' ?
            <ToggleButton active value="php" onClick={() => setToggle('php')}>PHP</ToggleButton>
            :
            <ToggleButton value="php" onClick={() => setToggle('php')}>PHP</ToggleButton>
          }
          <Divider />
          {toggle === 'uidesign' ?
            <ToggleButton active value="uidesign" onClick={() => setToggle('uidesign')}>UI/UX Design</ToggleButton>
            :
            <ToggleButton value="uidesign" onClick={() => setToggle('uidesign')}>UI/UX Design</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects