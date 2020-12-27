import logo from './tamires-logo.svg';
import Linkedin from './Linkedin.svg';
import Dribbble from './Dribbble.svg';
import Behance from './Behance.svg';
import Medium from './Medium.svg';
import photo from './foto-perfil.png';
import { Logo, Header, Contact, Section, H5, H3, P, Img, List, Footer , SectionProblemTogether , Data , SkillList , Button } from './styles.js';


function App() {
  return (
    <div className="App">
      <Header>
        <Logo src={logo} alt="logo" />
        <Contact href="https://www.linkedin.com/in/tamireslelis/" alt="this is my linkedin link">Contact</Contact>
      </Header >
      <Section>
        <div>
          <H5>Hi, I'm Tamires Lelis</H5>
          <H3>User
          Experience
          Designer
        </H3>
          <P>Human behavior has always fascinated me and that is the reason</P>
          <P>I enjoy creating user-centric,delightful systems and apps.</P>
          <List>
            <li><img src={Linkedin} alt="linkedin" /></li>
            <li><img src={Dribbble} alt="dribbble" /></li>
            <li><img src={Behance} alt="behance" /></li>
            <li><img src={Medium} alt="medium" /></li>
          </List>
        </div>
        <div>
          <Img src={photo} className="App-logo" alt="It's me here!" />
        </div>

      </Section >
     {/* <!-- <a>See more</a> */}

      <Footer>
        <SectionProblemTogether>
        Let's
        solve
        a problem
        together
        </SectionProblemTogether>
        
        <SkillList>
          <li><strong>I can help you with...</strong></li>
          <li>User Research</li>
          <li>Prototype</li>
          <li>Wireframe</li>
          <li>Interface Design</li>
        </SkillList>
        <SkillList>
          <li>Usability Testing</li>
          <li>Design Workshops</li>
          <li>Stakeholders Engagements</li>
          <li><Button>Talk to me</Button></li>
        </SkillList>
        
      </Footer>
      <Data>Since 2020 - Tamires lelis</Data>
    </div >
  );
}

export default App;
