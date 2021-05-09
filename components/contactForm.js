import style from './contactForm.module.css'

export default function ContactForm() {
   return (
      <div className={style.container}>

         <form className={style.form} name="contact" action="/formSubmission" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className={style.name_field}>
               <label htmlFor="yourname">
               </label> <br />
               <input type="text" name="name" id="yourname" placeholder="your name "/> <br />
            </div>
            <div className={style.email_field}>
               <label htmlFor="youremail">
               </label> <br />
               <input type="email" name="email" id="youremail" placeholder="your@email" />
            </div>
            <div className={style.message_field}>
               <label htmlFor="yourmessage">
               </label> <br />
               <textarea name="message" id="yourmessage" placeholder="your message"></textarea>
            </div>
            <div className={style.button_container}>
               <button type="submit">Send</button>
            </div>
         </form>

      </div>
   )
 }