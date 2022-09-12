import React, {useState} from 'react';

import classes from './KnowMore.module.css';
import kitchen from '../../../../assets/About/kitchen-3.jpg';

const KnowMore = () => {
    const [extend1, setExtend1] = useState(false);
    const [extend2, setExtend2] = useState(false);
    const [extend3, setExtend3] = useState(false);
    const [extend4, setExtend4] = useState(false);
    const [extend5, setExtend5] = useState(false);
    const [extend6, setExtend6] = useState(false);


    const dropDownFunct1 =() => {
        setExtend1((cur) => !cur)
    }
    const dropDownFunct2 =() => {
        setExtend2((cur) => !cur)
    }
    const dropDownFunct3 =() => {
        setExtend3((cur) => !cur)
    }
    const dropDownFunct4 =() => {
        setExtend4((cur) => !cur)
    }
    const dropDownFunct5 =() => {
        setExtend5((cur) => !cur)
    }
    const dropDownFunct6 =() => {
        setExtend6((cur) => !cur)
    }


  return (
    <div className={classes.knowMoreWrapper}> 
        {/* <h2>Want To Know More?</h2> */}
        <div className={classes.dropDownDiv}>
            <h2>Want To Know More?</h2>
            <div 
                className={classes.dropHeading}
                onClick={dropDownFunct1}
                ><b>{extend1? <b>- </b> : <b>&#43; </b>}</b> Capabilities</div>
                {extend1 &&(
                    <p>Coming Soon!</p>
                )}
            <div 
                className={classes.dropHeading}
                onClick={dropDownFunct2}
                ><b>{extend2? <b>- </b> : <b>&#43; </b>}</b> 
                 Cost Factors</div>
                {extend2 &&(
                    <p>As renovation contractors , our practice is always to <span>listen to our clients</span> closely enough to understand what they need and to tailor our recommendations as precisely as possible. This <span>eliminates unnecessary cost</span> factors and allows them to stick to their planned renovation budget.<br/><br/> We look carefully for economies and ways the client can reduce costs, and explain in detail what the various options are and how they affect the final price.</p>
                )}    
            <div 
                className={classes.dropHeading}
                onClick={dropDownFunct3}
                ><b>{extend3? <b>- </b> : <b>&#43; </b>}</b> Certifications and Insuarnce</div>
                {extend3 &&(
                    <p>As a fully-licensed contractor, <span>Mack Construction Co.</span> carries all required liability insurance and we are fully bondable. Our crews comply with all state and federal health and safety legislation.</p>
                )}  
            <div 
                className={classes.dropHeading}
                onClick={dropDownFunct4}
                ><b>{extend4? <b>- </b> : <b>&#43; </b>}</b> Permits and Planning</div>
                {extend4 &&(
                    <p>There’s a lot more that goes into a successful construction, renovation and remodeling project than just what happens on site.<br/><br/>The most successful projects happen <span>long before anyone is on site</span>, before any hammer is swung or any materials purchased. It all starts with proper planning and compliance with local legislation.<br/><br/>The average renovation project undertaken varies, the time frame depends on issues such as: the complexity of the design, and the client’s presence at the site during the process.<br/><br/>That’s why, when we work on your project, the first thing we do after you sign the contract is to <span>create a comprehensive project plan</span>. We present you with a timelinefor the project and an explanation of the steps involved. Then we apply for any necessary permits, and when all the I’s are dotted and the T’s are crossed we start work on your renovation or remodel.<br/><br/>During every project, we pay close attention to the required inspection schedule too, and you can be sure that whenever an inspection is required, it will happen on time, and before we move to the next phase.</p>
                )}
            <div 
                className={classes.dropHeading}
                onClick={dropDownFunct5}
                ><b>{extend5? <b>- </b> : <b>&#43; </b>}</b> Quality and Workmanship</div>
                {extend5 &&(
                    <div> 
                        <p>We pride ourselves on our workmanship and on <span>delivering quality results</span> to our customers. For this reason, we take steps to ensure your satisfaction, including:</p>
                        <ul>
                            <li><p>Developing relationships with suppliers of the best construction materials out there, so we can deliver the best to our clients at competitive prices,</p></li>
                            <li><p>Hand-picking and carefully training our crews to be the best in their fields, and</p></li>
                            <li><p>Paying close attention to lifecycle project management on every project we undertake.</p></li>
                        </ul>
                        <p>It’s also why all our projects come with our workmanship warranty, so that you can have peace of mind that your project will be done right, and that if anything turns up after our crews leave, we’ll be back to get it done right.</p>
                    </div>
                )}
            <div 
                className={classes.dropHeading}
                onClick={dropDownFunct6}
                ><b>{extend6? <b>- </b> : <b>&#43; </b>}</b> Total Package</div>
                {extend6 &&(
                    <p>At <span>Mack Construction Co.</span>, we believe in the big picture. We know that giving you the home or remodel you dream of is a multi-faceted process, that includes everything from good design and choosing the right materials, to making sure that processes are carefully followed.<br/><br/>We know that sometimes the walls of your home might be hiding safety hazards, and we’re always ready to take the proper steps to remediate the problem completely, and make sure your home is <span>safe for your family</span>.<br/><br/>Our team of experienced renovation contractors works with our clients to complete their projects <span>on time, to specification and with as little disruption to their lives as possible</span>.<br/><br/>That’s why Mack Construction Co is the total package in construction, renovation, and remodeling in the central Mississippi area.</p>
                )}      
        </div>
        <img src={kitchen} alt='kitchen'/>
    </div>
  )
}

export default KnowMore