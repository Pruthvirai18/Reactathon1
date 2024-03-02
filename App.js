import React, { useState } from 'react';

function Home() {
  
  const [selectedOption, setSelectedOption] = useState('');


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ backgroundColor: '#ffffff' ,border:'2px solid #b80000', padding: '20px' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'red' }}>Welcome to our Heartcare Website!</h1>
        <img
          src="https://www.hcigroupglobal.com/wp-content/uploads/2022/11/health-icon-4-3.png"
          alt="Heartcare logo"
          width="50"
          height="50"
        />
        <h3>Global heartcare to fit your lifestyle</h3>
      </header>
      <main style={{ textAlign: 'center' }}>
        <img
          src="https://heartcareintl.org/wp-content/uploads/2020/12/slider1.jpg"
          alt="A smiling child after heart surgery"
        />
        <section>
          <h1>OUR MISSION:</h1>
          <p>
            <h3>
              Heart Care International saves the lives of needy children born with congenital heart defects.
            </h3>
          </p>
          
         
          <label htmlFor="dropdownMenu">More info</label>
          <select id="dropdownMenu" value={selectedOption} onChange={handleOptionChange}>

            <option value="AboutUs">About us</option>
            <option value="Education">Education</option>
            <option value="Get involved">Get involved</option>
          </select>

          
          {selectedOption === 'AboutUs' && (
            <p>
              
The Covid-19 pandemic created worldwide challenges, to say the least. Heart Care International is proud to have responded to the call by creating virtual opportunities for pediatric cardiac healthcare through patient tele-conferencing and global grand rounds. We will continue these efforts as we resume travel to our host hospitals.
Created in 1994, Heart Care International is a not-for-profit 501(c)(3) organization based in Greenwich, Connecticut, with a dual mission. We team with hospitals in developing countries to provide high quality, compassionate, and completely free surgical cardiac care to needy children and teenagers with heart disease. Also critical to our mission, we help develop self-sustaining pediatric cardiac centers through education – in-person and via web-based tele-communications. Dedicated medical professionals volunteer 100% of their time to staff our medical missions and contribute to our year-long ongoing training. Medical supplies and equipment are donated from medical companies or purchased through philanthropic donations. We take our place in the world seriously and continually strive to heal children’s hearts, even during pandemic times.


            </p>
          )}

          {selectedOption === 'Education' && (
            <p>
              <center><h3>Training</h3></center>
<center><h4>Hands-on-work</h4></center>
Heart Care International believes that through education and hands-on training, we can help build pediatric cardiac care units in developing countries. We also believe that the medical training has to be custom-made to the needs and interests of the host country medical team. We are successful when we can work collaboratively and respectfully with HCI’s host hospital medical teams.
<center><h4>Tele-Conferencing</h4></center>
When travel isn’t possible, HCI’s virtual health care system allows us to continue our education and training. Through doctor-to-doctor tele-conferences, patient cases can be reviewed in real-time between in-country medical professionals and HCI team members, generating suggestions and collegial brainstorming opportunities for the local teams.

<center><h4>Handbook For Parents and Families</h4></center>
Heart Care International’s Logistics Director and ICU Nursing Team Captain, Betsy Tirado RN, created a Parent/Family Handbook which is distributed to all families with children undergoing heart procedures on each mission. This guide offers important information about congenital heart defects (CHD, detailed explanations of CHD medical terminology, and what to expect during recovery once home.


            </p>
          )}

          {selectedOption === 'Get involved' && (
            <p>
              <center><h3>Memorial or Honorary Gifts</h3></center>
You can honor a friend, a loved one, or even celebrate a special event through a donation. We’ll send a letter notifying the family of your gift (amount won’t be included). All of this can be done online, or you can contact us at info@heartcareintl.org for assistance.
<center><h3>Matching Gifts</h3></center>
A fast and easy way to DOUBLE your contribution! Be sure to check with your employer. Contact info@heartcareintl.org if further assistance would be helpful.
<center><h3>Planned Giving</h3></center>
A stock gift or Other Financial Asset is an easy way to support our work and receive favorable tax considerations. Contact us at info@heartcareintl.org for more information.

            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
