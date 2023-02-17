import React from 'react'
import './Contactus.css'

const Contactus = () => {
  return (
    <div>
      <div class="conta container">
	<div class="front side">
		<div class="content">
			<h1 className='h1u'>Shubham Vaishya</h1>
			<p className='ptext'>I am a graphic designer and art director. I am as well specialised in front end web design, user experience and creating identities. Throughout my career, I have worked with companies of all shapes and sizes that enriched my experience
			</p>
		</div>
	</div>
	<div class="back side">
		<div class="content">
			<h1>Contact Me</h1>
			<form>
				<label>Your Name :</label>
				<input type="text" placeholder="Omar Khattab"/>
				<label>Your E-mail :</label>
				<input type="text" placeholder="Example@mail.com"/>
				<label>Your message :</label>
				<textarea placeholder="The Subject"></textarea>
				<input type="submit" value="Done"/>
			</form>
		</div>
	</div>

</div>
<a target="_blank" href="http://codepen.io/Moslim/" class="white-mode">OTHER PENS</a>
    </div>
  )
}

export default Contactus
