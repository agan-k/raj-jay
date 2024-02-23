import {Container} from "./styled";

export default function MailingList() {
  return(
    <Container>
      <form name="mailing-list" action="/formSubmission" method="POST" data-netlify="true">
        <div>
          <input type="hidden" name="form-name" value="mailing-list" />
          <label htmlFor="yourcity">
          </label>
          <input type="text" name="city" id="yourcity" placeholder="your city" />
        </div>
        <div>
          <label htmlFor="youremail">
          </label>
          <input type="email" name="email" id="youremail" placeholder="your@email" />
        </div>
        <button type="submit">join</button>
      </form>
    </Container>
  );
}