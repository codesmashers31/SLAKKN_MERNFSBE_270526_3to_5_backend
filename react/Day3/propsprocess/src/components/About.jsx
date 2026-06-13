import Toggle from "./Toggle";


const About = (newprops) => {

    const isActive = false

    console.log(newprops);

    const {name} = newprops
    
  return (
  <>
  <h1>{name}</h1>
  <Toggle booleanValue = {isActive}   />
  </>
  )
}

export default About
