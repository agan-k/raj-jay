import {Container} from "./styled";

export default function MailingList() {
  return(
    <Container>
      <span>join mailing list:</span>
      <form name="mailing-list" action="/formSubmission" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="mailing-list" />
        <div className="form_label">
          <label htmlFor="yourcity">
          </label>
          <input type="text" name="city" id="yourcity" placeholder="city" />
        </div>
        <div className="form_label">
          <label htmlFor="youremail">
          </label>
          <input type="email" name="email" id="youremail" placeholder="e-mail" />
        </div>
        <div>
          <button type="submit">Join</button>
        </div>
      </form>
    </Container>
  );
}