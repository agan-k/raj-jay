import style from './mailing_list.module.css'

export default function MailingList() {
   return (
      <div className={style.container}>
         <form name="mailing-list" action="/formSubmission" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="mailing-list" />
            <div className={style.form_label}>
               <label htmlFor="yourcity">
               </label>
               <input type="text" name="city" id="yourcity" placeholder="city" />
            </div>
            <div className={style.form_label}>
               <label htmlFor="youremail">
               </label>
               <input type="email" name="email" id="youremail" placeholder="e-mail" />
            </div>
            <div>
               <button type="submit">Join</button>
            </div>
         </form>

      </div>
   )
 }