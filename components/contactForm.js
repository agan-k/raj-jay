export default function ContactForm() {
   return (
     <form name="contact" action="/formSubmission" method="POST" data-netlify="true">
       <input type="hidden" name="form-name" value="contact" />
       <p>
         <label htmlFor="yourname">
           Your Name:
         </label> <br />
         <input type="text" name="name" id="yourname" /> <br />
       </p>
       <p>
         <label htmlFor="youremail">
           Your Email:
         </label> <br />
         <input type="email" name="email" id="youremail" />
       </p>
       <p>
         <label htmlFor="yourmessage">
           Message:
         </label> <br />
         <textarea name="message" id="yourmessage"></textarea>
       </p>
       <p>
         <button type="submit">Send</button>
       </p>
     </form>
   )
 }