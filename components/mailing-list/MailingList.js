import {useForm, ValidationError} from '@formspree/react';
import {Container, SuccessMessage} from "./styled";

export default function MailingList() {
  const [state, handleSubmit] = useForm("mzbngzay");

  return(
    <Container>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        style={{
          position: 'absolute',
          top: '24px',
          color: 'red',
          fontWeight: 100,
          letterSpacing: '0px',
          fontStyle: 'italic',
          whiteSpace: 'nowrap',
        }}
      />
      {state.succeeded ? 
        <SuccessMessage>Thanks for joining!</SuccessMessage> :
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="city"
              type="city" 
              name="city"
              placeholder="your city"
            />
          </div>
          <div>
            <input
              id="email"
              type="email" 
              name="email"
              placeholder="your@email"
            />
          </div>
          <button type="submit" disabled={state.submitting}>join</button>
        </form>
      }
    </Container>
  );
}