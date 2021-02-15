import React from 'react'

const Body = () => {
    return (
        <div>
            <div class="container">
     <h1>Connor Flynn - Web Developer</h1>
     <div class="flexcontainer">
       <div class="imgcontainer">
         <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-260nw-1114445501.jpg" id="profileimg">
           
         </img>
       </div>
       <div class="textcontainer">
         <p>Welcome to my Web Portfolio. My name is Connor Flynn, and I am a Web Developer based in Sydney, NSW
          </p> 
           <p>
            I have successfully completed a full time, full stack, Web Developer Boot-camp at Coder Academy in Sydney.
            During my time there, I learned the in's and out's of coding, and can confidently say I can make full stack web app's from the ground up.
            </p>
            <p>
              My tech stack is diverse and allows me to understand concepts from all perspective of web development. It currently includes
              <ul id="techstack">
                <li>Ruby/Rails</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>CSS Libraries (Bootstrap, SASS, etc.)</li>
                <li>PostgreSQL</li>
                <li>Git/GitHub</li>
              </ul>
              <p>
                I am currently looking for work in the tech industry, and given the chance, I will be an asset to any company that decides to take me on.

              </p>
              <p>
                You can find projects that i've worked on below, as well as ways in which to contact me. 
              </p>
            </p>
       </div>
     </div>
        </div>
        </div>
    )
}

export default Body
