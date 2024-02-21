import { Container } from "./styled";
import { FlexBox } from "../../../../components";

export default function ContactForm() {
  return (
    <Container>
      <form name="contact" action="/formSubmission" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" id="yourname" placeholder="your name "/> <br />
        <input type="email" name="email" id="youremail" placeholder="your@email" />
        <textarea name="message" id="yourmessage" placeholder="your message"></textarea>
        <FlexBox $justifyContent={'end'}>
          <button type="submit">Send</button>
        </FlexBox>
      </form>
    </Container>
  )
}