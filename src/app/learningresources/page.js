import './learningresources.css';
import Banner from '../Components/Banner.js';

const LearningResources = () => {
    return (
      <>
      <title>Learning Resources</title>
      <Banner
      title="Library and Resource Centre Guidelines"
      subtitle="Rules for Access, Conduct, and Responsible Use of Facilities"
      buttonText="Contact Us"
      buttonLink="/aboutus"
      leftLogo="/images/logo.png"  
      rightLogo="/images/logo.png" 
      />
      <div className="info-container">
        <h2>Rules Governing the Use of the Library and Resource Centre</h2>
  
        <p>All students and staff of the College are entitled to register as members of the Library and Resource Centre and to use the facilities for the purpose of their course of study or College employment.</p>
        <p>Membership may also be extended to other individuals and to persons nominated from other organisations: a fee is usually charged. Access to the Library and Resource Centre for study purposes may be made available to non-members by arrangement. Details are available in the External Services leaflet.</p>
        <p>Use of facilities implies acceptance of the Library and Resource Centre rules printed below. These are designed to protect the interests of all users of Library and Resource Centre and to ensure that the College operates within the law and can carry out its functions efficiently and effectively. The Library and Resource Centre rules apply in principle to all sites, including workstation rooms and site libraries, notwithstanding some variations in practice in the site libraries. Admission to the Library and Resource Centre is conditional upon observation of the rules and the staff are empowered to enforce them.</p>
        <p>Breaches of the rules may be dealt with by specific Library and Resource Centre Disciplinary Action (see below), including the withdrawal of some access, and if appropriate by invoking the College’s Regulations for Students, in the case of students, or in the case of staff through the appropriate College procedures as set out in the Staff Handbook.</p>
  
        <h3>Rules</h3>
  
        <ol className="roman-list">
            <strong>A. Access:</strong>
            <ol>
              <li>The use of Library and Resource Centre facilities is normally limited to use for the educational and other purposes of the College.</li>
              <li>All individuals wishing to become members of the Library and Resource Centre must comply with the registration procedures. These include an undertaking to abide by Library and Resource Centre rules.</li>
              <li>Individuals or organisations who are not eligible for membership but have good reason to use the Library and Resource Centre may be admitted, by arrangement, for purposes of study only. Procedures for seeking admission are outlined in the External Services leaflet. Non-members must sign the Visitors' Book on each visit, and may be required to produce written identification. Study use does not include access to the College's Academic Network.</li>
              <li>ID cards issued by the College are not transferable from one person to another. The person named on each card is responsible for all items borrowed on it and is liable for the cost of replacement of the card or items borrowed on it in the event of loss or damage. Users of the Library and Resource Centre are reminded that they must be willing to show ID cards or other identification when requested to do so by College staff.</li>
            </ol>
  
            <strong>B. Use of Facilities:</strong>
            <ol>
              <li>The Library and Resource Centre is not responsible for loss of, or damage to, the personal belongings of its users and visitors. Users must take reasonable precautions against theft of their belongings, and must not leave belongings unattended even for a very short period. Study tables/PCs may not be reserved by depositing clothing or private property on the adjacent seat. Articles left unattended may be removed by staff but will be returned on request at the Reception Desk.</li>
              <li>All users are required to conduct themselves quietly throughout the Library and Resource Centre and conversation between users must be kept to a minimum. No conversation is permitted in those areas designated as ‘Silent’ areas.</li>
              <li>Personal stereos may not be used in the Library and Resource Centre.</li>
              <li>Mobile phones must be turned off in all Library and Resource Centre study areas. Their use is permitted in the enclosed stair wells of the Main Site building.</li>
              <li>Users should not make use of mains electrical supplies to power their own equipment, including external storage devices, unless the equipment has been tested and confirmed as meeting the required Health & Safety standards. Written evidence of such compliance will be required.</li>
              <li>Eating and drinking are not permitted in any of the public areas of the Library and Resource Centre.</li>
              <li>Action will be taken against any person misusing furniture, facilities or materials. Any such person may be required to pay for the making good damage or loss.</li>
            </ol>
        </ol>
      </div>
      </>
    );
  };
  
  export default LearningResources;