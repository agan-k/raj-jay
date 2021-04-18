export default function MailingList() {
   return (
     <form name="mailing-list" action="/formSubmission" method="POST" data-netlify="true">
       <input type="hidden" name="form-name" value="contact" />
       <p>
         <label htmlFor="yourcity">
           Your City:
         </label> <br />
         <input type="text" name="city" id="yourcity" /> <br />
       </p>
       <p>
         <label htmlFor="youremail">
           Your Email:
         </label> <br />
         <input type="email" name="email" id="youremail" />
       </p>
       <p>
         <button type="submit">Send</button>
       </p>
     </form>
   )
 }