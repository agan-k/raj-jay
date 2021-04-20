import style from './mailing_list.module.css'

export default function MailingList() {
   return (
      <div className={style.container}>
         {/* <p>join mailing list</p><br/> */}
         <form name="mailing-list" action="/formSubmission" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className={style.form_label}>
               <label htmlFor="yourcity">
               <span>City:</span><br />
               </label>
               <input type="text" name="city" id="yourcity" />
            </div>
            <div className={style.form_label}>
               <label htmlFor="youremail">
               <span>Email:</span><br />
               </label>
               <input type="email" name="email" id="youremail" />
            </div>
            {/* <br/> */}
            <div>
               <button type="submit">Send</button>
            </div>
         </form>

      </div>
   )
 }