import {Container} from "./styled";

export default function MailingList({text}) {
  const space = <>&nbsp;</>
  return(
    <Container>
      <form name="mailing-list" action="/formSubmission" method="POST" data-netlify="true">
        {text && (
          <>{text}&nbsp;&nbsp;</>
        )}
        <div>
          <input type="hidden" name="form-name" value="mailing-list" />
          <label htmlFor="yourcity">
          </label>
          <input type="text" name="city" id="yourcity" placeholder="city" />
        </div>
        <div>
          <label htmlFor="youremail">
          </label>
          <input type="email" name="email" id="youremail" placeholder="e-mail" />
        </div>
        <button type="submit">join</button>
      </form>
    </Container>
  );
}