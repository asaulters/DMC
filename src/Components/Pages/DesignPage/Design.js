import React from 'react';

import classes from './Design.module.css';

import Contact from '../Home/Contact/Contact';

import HeroImg from '../../../assets/Home/heroHome1.jpg';
import discoveryImg from '../../../assets/Design/discovery1.jpg';
import designImg from '../../../assets/Design/design1.jpg';
import planningImg from '../../../assets/Design/plan1.jpg';
import constructionImg from '../../../assets/Design//construction1.jpg';
import initImg from '../../../assets/Design/sunroom1.jpg';
import poolImg from '../../../assets/Design/pool1.jpg';
import kitchen1 from '../../../assets/Design/kitchen1.jpg';
import kitchen2 from '../../../assets/Design/kitchen2.jpg';


const Design = () => {
  return (
    <div className={classes.designWrapper}>
        <div className={classes.heroDiv}>
            <img src={HeroImg} alt='Constructed Home' />
            <div className={classes.hero_wu}>
            <h1>Design and Build Process</h1>
        </div>
    </div> 

        <div className={classes.designTop}>
            <h2>Our Path to Perfection</h2>
            <div className={classes.line}></div>
            <p>Here at Mack Construction Co, what sets us apart from our competition is our process. First, we listen to what you want so we can understand your goals and expectations. Then we deliver thoughtful planning and design, well-led project management, clear communication, and excellent craftsmanship. Our people, process, and commitment to your satisfaction remove the risk, hassle and headaches from your remodeling project, so you can truly enjoy the end result.  </p>
        </div>

        <div className={classes.initConvo}>
            <div className={classes.initConvoWU}>
                <h2>Initial Conversation</h2>
                <h4>Is your project scope a good fit for both parties?</h4>
                <p>During our initial contact with the homeowner, we’re gathering important general information about the project determining whether the project is a good fit for both parties. Here are some topics we like to discuss before we schedule an in-person consultation:<br/><br/></p>
                {/* <ul className={classes.wuUL}> */}
                    <li>Summary of the project</li>
                    <li>What you’d like from us</li>
                    <li>Have you started the design / plans process?</li>
                    <li>Do you have a designer or decorator involved already?</li>
                    <li>Does your project need design services?</li>
                    <li>Are you speaking with other builders?</li>
                    <li>What is your desired timeline?</li>
                    <li>Have you remodeled before?</li>
                    <li>Do you have a budget range in mind?</li>
                    <li>How did you hear about us?</li>
                    <li>What do you value most relative to choosing a builder?</li>
                    <li>Quick overview of our process and services</li>
                    <li>Scheduling a visit</li>
                {/* </ul> */}
            </div> 
            <img src={initImg} alt='Sunroom' />
        </div>

        <div className={classes.consult}>
            <div className={classes.consultWU}>
                <h2>On-Site Consultation</h2>
                <h4>Let’s chat about your vision and ideas</h4>
                <p>Please allow 1 to 2 hours for an in-home consultation. We prefer all decisionmakers to be present at this meeting. During this meeting, we will start by listening to you explain what you want in the remodel, and some of the functional or design issues you want to change.<br/><br/></p>
                <h3>Meeting Outline</h3>
                    <li>Get the general idea of what want to do</li>
                    <li>Establish design criteria, restrictions and/or obstacles</li>
                    <li>Structural considerations</li>
                    <li>Options and features (must haves and wants)</li>
                    <li>Theme or concept you are trying to accomplish</li>
                    <li>Q & A exchange from both parties</li>
                    <li>Offer you a few initial ideas for your consideration</li>
                    <li>We might take a few photos of the space</li>
                    <li>Do you have a budget range in mind?</li>
                    <li>We will spend time reviewing our process and services (Pamphlet handout)</li>
                    <li>Establish a timeframe when you can expect to hear back from us</li>
            </div> 
            <img src={poolImg} alt='pool' />
        </div>

        <div className={classes.estimate}>
            <div className={classes.estimateWU}>
                <h2>Ballpark Estimate</h2>
                <h4>Determining probable project cost</h4>
                <p>At this stage, clients are still trying to decide on a builder and gain understanding of costs.  We will ask you to fill out a detailed checklist asking about options and features you want included in your remodel.  We use a template to assist in estimating the likely cost of your project. “Ballparking” isn’t easy, but with many years of experience, we can draw from our knowledge of prior projects similar to yours. It is important to remember we’re estimating costs without blueprints, scope of work, or any selections at this phase. Every project is unique.<br/><br/>The estimates we provide are data points to help you decide whether to move forward with a design agreement.</p>
                <h3>Three biggest variables driving project costs:</h3>
                    <li>Size of the project</li>
                    <li>Difficulty of the project</li>
                    <li>The quality level of your selections</li>
                <h3>With no plans, we need to know a little bit more:</h3>    
                    <li>Besides changing parts, what changes must be included in the remodel?</li>
                    <li>What functions of the space are you trying to address in the remodel?</li>
                    <li>What ideas are you thinking about currently?</li>
                    <li>Which options /features do you want included?</li>
                    <li>We will provide a check list of options you might not have considered at this stage</li>
                    <li>Do you have any photo examples of what you want your space to look like?</li>
                    <li>We will offer up our ideas and gauge whether you want them in the ballpark</li>
            </div> 
            <div className={classes.imgDiv1}>
                {/* <img src={discoveryImg} alt='pool' />
                <br/><br/> */}
                <img src={kitchen2} alt='kitchen' />
            </div>

        </div>

        <div className={classes.designAgreement}>
            <div className={classes.designAgreementWU}>
                <h2>Design Agreement</h2>
                <p>Design is the lifeblood of our business. No design means no job to build! Without planning and design, clients do not know what’s possible. You might be amazed by the dreams you didn’t realize were possible! Let’s get to the fun part!<br/><br/></p>
                <h3>Phase 1 – Developing Conceptual Plans</h3>
                    <p>This is the exciting part. After we understand what you want out of this project, we work with you to review drawings and renderings, discuss products and materials and talk plan options. The goal is to ensure a shared vision of the end result of your project, and a mutual understanding of the path to completion.</p>

                <h3>Phase 2 – The Selections</h3>    
                    <p>Selections – sometimes can be overwhelming, but don’t stress. Our team will help!<br/><br/>Selections are all the fine details ranging from appliance model numbers, cabinet door style and colors, faucet finishes, flooring types and wall coverings. During this phase, we’re simultaneously arranging contractor meetings and collecting their labor costs to put in your budget. These line items range from demolition, framing, HVAC, plumbing, electrical contractors, insulation, and drywall etc. Depending on the complexity of the project, a consultation with a structural engineer may be required. Transparency is how we do business, and as you make your selections, we’re actively getting them quoted and put in the budget.</p>
            </div> 
            <img src={planningImg} alt='planning' />
        </div>

        <div className={classes.preConstruction}>
            <div className={classes.preConstructionWU}>
                <h2>Pre-Construction Meeting</h2>
                <h4>Setting expectations, ordering, and scheduling</h4>
                <p>The pre-construction meeting is one of the most important meetings in the build process. At this stage a contract has been signed and deposit monies have been collected. We are preparing, planning, and setting expectations. This is the time to get dialed in and prepare for launch.<br/><br/></p>
                <h3>Here is a summary of topics we cover during this meeting:</h3>
                    <li>Review plans, last minute selections, confirmation of important material orders</li>
                    <li>Permit status</li>
                    <li>How to prepare for the space being remodeled</li>  
                    <li>Preferred method of communication</li>
                    <li>Preferred access into the home for builder/contactors</li>
                    <li>Location of the dumpster and portable restroom</li>
                    <li>Location of the material staging area (usually the garage)</li>
                    <li>Location of the debris pile and debris control</li>
                    <li>Access to home, alarm systems,</li>
                    <li>Children and pets and their access to the worksite</li>
                    <li>Preferred parking for our construction team</li>
                    <li>Typical working hours</li>
                    <li>Payment schedules</li>
                    <li>Delays incurred and why</li>
                    <li>Job signs and permit box locations</li>
            </div> 
            <img src={kitchen1} alt='pool' />
        </div>

        <div className={classes.construction}>
            <div className={classes.constructionWU}>
                <h2>Construction</h2>
                <h4>Unmatched care and craftsmanship.</h4>
                <p>At this stage, Mack Construction Co. handles every aspect of your project. From scheduling, managing subcontractors, ordering materials, coordinating permits and inspections, we do all of this to make sure it is as smooth as possible. Our carpenters bring a level of skill and craftsmanship that is simply second to none. And your dedicated project manager will keep things on task, on time, and on the money. Trust us: As your project moves along, you’ll realize the benefits of having one point-of-contact throughout. All so you will have a beautiful, functional new space in your home.</p>
            </div> 
            <img src={constructionImg} alt='Construction Foreman' />
        </div>


{/* 
        <div className={classes.discovery}>
            <div className={classes.discoveryWU}>
                <h2>Discovery</h2>
                <h4>What is your vision for your home?</h4>
                <p>Starting our, we'll discuss what your vision is for your home: ideas, photos, and any suggestions or wants you may have. Here we can learn how we are best able to make that come to life. We may also discuss budget parameters and other project objectives. This is the first step towards your dream home.</p>
            </div> 
            <img src={discoveryImg} alt='Construction Foreman' />
        </div>
        
        <div className={classes.design}>
            <div className={classes.designWU}>
                <h2>Design</h2>
                <h4>Let's bring that vision to life!</h4>
                <p>This is the exciting part. After we understand what you want out of this project, we work with you to review drawings and renderings, discuss products and materials and talk plan options. The goal is to ensure a shared vision of the end result of your project, and a mutual understanding of the path to completion.</p>
            </div> 
            <img src={designImg} alt='Construction Foreman' />
        </div>
        <div className={classes.planning}>
            <div className={classes.planningWU}>
                <h2>Planning</h2>
                <h4>Planning, preparation and peace of mind.</h4>
                <p>Plans are finalized, materials specified—and a detailed budget and schedule will show you what will be done, when, and exactly what it will cost. Our budgeting process takes all project requirements and costs into account, so you can count on the budget we present.</p>
            </div> 
            <img src={planningImg} alt='Construction Foreman' />
        </div>
        <div className={classes.construction}>
            <div className={classes.constructionWU}>
                <h2>Construction</h2>
                <h4>Unmatched care and craftsmanship.</h4>
                <p>At this stage, Mack Construction Co. handles every aspect of your project. From scheduling, managing subcontractors, ordering materials, coordinating permits and inspections, we do all of this to make sure it is as smooth as possible. Our carpenters bring a level of skill and craftsmanship that is simply second to none. And your dedicated project manager will keep things on task, on time, and on the money. Trust us: As your project moves along, you’ll realize the benefits of having one point-of-contact throughout. All so you will have a beautiful, functional new space in your home.</p>
            </div> 
            <img src={constructionImg} alt='Construction Foreman' />
        </div> */}

    <Contact />

      

    </div>
  )
}

export default Design