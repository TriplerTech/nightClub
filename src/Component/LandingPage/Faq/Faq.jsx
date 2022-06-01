import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css'

const Faq = () => {
    return (
        <div id="faq">
         <Container>
         <div className='px-md-5'>
             <h1 className='mainHeading'>Common Questions About <span className='text-yellow'>Night King Club</span></h1>
     <div className='px-md-3'>
     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
        // className='accurdian-icon'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Typography
            // expandIcon={<ExpandMoreIcon />}
           >
             <h3 className='question'><span>01</span> What makes Night King Club unique?</h3>   
             
             </Typography>
             
         </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
                    Most NFT projects cannot sustain long term success for two reasons. First, their NFTs lack real-world utility. Second, their community lacks real-world interaction to form a strong bond. 
                   At Night King Club, we’re avoiding these common pitfalls by doing things differently. Our NFTs have clear, real-world utility to ensure constant buying pressure. The benefits of NFT stacking also incentivize “diamond hand” behavior. As far as social interaction, our team will only throw the most exciting and unforgettable LIVE parties at top venues that members will absolutely love.
              </Typography>
             </AccordionDetails>
         </Accordion>

     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>02</span> How many NFTs will be minted, and what are the different tiers/ categories?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               All 5000 NFTs will be broken down into 3 different tiers and 2 categories (OG and non-OG):
               <ul>
                 <li><b>• Tier #1: </b> RARE (3000; OG: 1200, Non-OG: 1800) – 60% of collection</li>
                 <li><b>• Tier #2: </b> MYTHICAL (1600; OG: 1000, Non-OG: 800) – 32% of collection</li>
                 <li><b>• Tier #3: </b> LEGENDARY (400; OG: 250, Non-OG: 150) – 8% of  collection
                  * Of the 250 OG legendary NFT, 9 OG legendary NFT are for the core team members
                  and 91 OG legendary NFT are for founding members (influencers, top crypto traders/whales, celebrities, advisors, and special guests)</li>
               </ul>
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>03</span> What is the difference between OG and non-OG NFTs? </h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Our valued OG NFT holders will enjoy several additional perks and benefits to include:
               <ul>
                 <li>1. OG NFTs will be decorated with an “OG” brooch pin as a mark of uniqueness.</li>
                 <li>2. Entitled to invite friends to our community via invitation pass minting</li>
                 <li>3. Entitled to 20% more $NKG ecosystem staking reward compared to non-OG NFTs at the same tier.</li>
                 <li>4. Exclusive priority access to our can’t-miss, in-person launch party .</li>
               </ul>
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>04</span> How can I get an OG membership NFT?   </h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               You will need to get one of the OG membership NFT minting passes.(Lucky, Mythical or Legendary) in phase 1 to get an OG membership NFT.
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>05</span> What is the minting process? How much will it cost to mint? </h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               The minting process will be completed in two phases. <br />
Minting costs will depend on which pool you would like to get your membership NFT from. <br />
In general, the higher the cost, the more valuable your membership NFT. 
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>06</span> Why is the mint price to Night King Club’s membership NFT higher than most other NFT projects?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               The higher membership costs at Night King Club are based on the ultra-rare experiences we deliver. As a Night King Club member, you’ll get VIP access to elite nightclubs around the globe, party experiences similar to the movie wolf of wall street, and access to our community of business elites and gorgeous models. You will also get exclusive privileges in the world’s best Web 3 nightclub metaverse. <br /> <br />

                VIP status at some high-end nightclubs costs over $100K annually, while elite business clubs cost $50K annually. Our prices are much more affordable and include NFT welcome rewards 
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>07</span> Why will Night King Club become a lasting success?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               The answer is simple: Night King and his team have years of experience running successful nightclubs and entertainment venues. We know what it takes to not only succeed, but to thrive. With the addition of a talented dev, access to leading model agencies to jam-pack events with gorgeous women, and an experienced game designer to bring even more life to the project, Night King Club will pave the way to elevated community, entertainment, and success in the Web 3.0.
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>08</span> Why have the team members decided to remain anonymous for now?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Like all the professionals in the nightlife industry and founders of some of the most successful NFT projects (such as BAYC), we value our privacy. With that being said, our team doesn’t plan to remain anonymous forever. We look forward to meeting our beloved NFT holders in person. Currently, we plan to reveal ourselves to our exclusive OG NFT holders during our in-person launch party, which will also be attended by countless gorgeous models.
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>09</span> Which partnerships are the team currently planning?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Our team is committed to leveraging our broad connections to bring the most value to NKG membership NFT holders. We plan to form partnerships with elite nightclubs and bars around the world. No matter where our members live, they will be able to enjoy the luxurious experience. Additionally, we plan to partner with high-end fashion brands, as well as other crypto/NFT projects. We will announce our partners on Twitter. Stay tuned!. 

              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>10</span> Do you have any VC investors?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               No. We decided not to accept money from VC in order to provide the highest value to our community members. Although we have been approached by several VCs in our social circle (offering millions of dollars to get involved), we turned them down. We believe this is best for the whole Night King Club community. That’s because there will be no heavy sell pressure from VCs who get the tokens and NFTs at a cheaper price. This is just another way we are different from other crypto projects. 

              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>11</span> I am a woman, can I join the Night King Club?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Of course! Although we designed the Night King Club primarily for ambitious and adventurous men who want a unique life experience, we welcome talented, beautiful girls to join as well! In fact, several actresses and models have been whitelisted to become OG NFT holders. We look forward to seeing all of you at our launch party!
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>12</span> Can you provide more details on invitation pass minting?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Invitation pass minting is a benefit to reward our valued OG NFT holders. Once the OG NFT has clubbed for a specific length of time (refer to the table here), the holder will be entitled to mint invitation passes with 6969 $NKG. The invitation pass can be used to invite friends to our growing community. 
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>13</span> What is the utility of the exclusive model NFTs, and how can I get one?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               The exclusive model NFT airdrop is our exclusive gift to true believers who hold 2 membership NFTs (any tier, invitation pass not included) within their wallet. The hot model NFT will allow the holder to mint limited exclusive 3D model NPC NFTs in our Night King Club metaverse, as well as unlock exclusive service at our in-person events. ; ) The NFT will also be tradable on our marketplace, a priceless gift to our valued NFT holders.
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>14</span> I am an introvert and a bit nerdy, will I enjoy Night King Club’s events?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Of course! We have a professional event team to make sure that even the most introverted guy will have an unforgettable experience at our event :)
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>15</span> Is there a Discord channel?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Yes, but the channels are NFT-gated (you must hold a NKG clubber to enter). Once inside, you will be able to interact with other elites and have access to our exclusive party and partnership info.
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>16</span> Is there a guaranteed mint allowist?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
                Yes. Please follow our Twitter for more information.
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>17</span> What if some winners on the guaranteed mint allowlist do not mint?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               We will randomly select more winners from the raffle and notify them via <a href="https://www.premint.xyz/">https://www.premint.xyz/</a> moonbirds-allowlist-raffle/verify. To ensure that your email is registered in PREMINT, go to <a href="https://premint.xyz/profile"> https://premint.xyz/profile</a> and enter your email. 
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>18</span> What are the maximum mints per wallet?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               One mint per wallet is allowed per allowlist winner for the OG pass minting phase. For the NKG clubber NFT minting phase, the maximum mint per wallet will be two.
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>19</span> How soon after NKG clubber NFT mint will the NFT clubbing feature be available?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Within one week
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>20</span> Will NKG clubber be revealed right away?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Yes, you will immediately know what your clubber looks like. 
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>21</span> What are secondary royalties and how will they be used?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Night King Club will receive 5% of all secondary sales. These proceeds will be used to hire talented people, throw great parties, and deliver even more value to our community.
              </Typography>
             </AccordionDetails>
         </Accordion>


     <Accordion className='my-4 accordion-body '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
              <h3 className='question'><span>22</span> What intellectual property rights do NKG clubber holders receive?</h3>   
             </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography className='text-start ps-md-4 ms-md-3 questionAnswer'>
               Owners of NKG clubber will have full commercial art rights to the NKG clubber they own.
              </Typography>
             </AccordionDetails>
         </Accordion>
     </div>
    </div>
        </Container>       
         </div>
    );
};

export default Faq;