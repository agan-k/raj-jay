import {useForm, ValidationError} from '@formspree/react';
import { Container, ErrorMessage, MessageSubmitted } from "./styled";
import { FlexBox } from "../../../../components";

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("moqgwvky");
    
  return (
    <Container>
      {state.succeeded ? 
        <MessageSubmitted>Message submitted. Thank you!</MessageSubmitted> 
        :
        <form onSubmit={handleSubmit}>
          <input type="name" name="name" id="name" placeholder="your name"/>
          <FlexBox $gap="16">
            <input type="email" name="email" id="email" placeholder="your@email"/>
            <ErrorMessage>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </ErrorMessage>
          </FlexBox>
          <textarea name="message" id="yourmessage" placeholder="your message"></textarea>
          <FlexBox $justifyContent={'end'}>
            <button type="submit" disabled={state.submitting}>Send</button>
          </FlexBox>
        </form>
      }
    </Container>
  );
};