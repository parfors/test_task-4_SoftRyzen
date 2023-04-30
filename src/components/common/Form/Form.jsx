import { Formik } from 'formik';
import * as yup from 'yup';
import {
  ContactForm,
  ContactInput,
  FormBtn,
  InputWrap,
  LoginFormError,
  PlaceholderText,
} from './Form.styled';

const initialValues = {
  name: '',
  email: '',
};

const schema = yup.object().shape({
  name: yup.string().min(1).max(12).required(),
  email: yup.string().email(),
});

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Form() {
  const submitHandler = (values, actions) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: values.name,
        email: values.email,
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={submitHandler}
      >
        {props => {
          const { values } = props;
          return (
            <ContactForm autoComplete="false">
              <input type="hidden" name="form-name" value="contact" />
              <InputWrap>
                <ContactInput
                  type="text"
                  placeholder=""
                  name="name"
                  id="name_input"
                />
                <PlaceholderText className={values.name ? 'active' : null}>
                  Enter your name
                </PlaceholderText>
                <LoginFormError name="name" />
              </InputWrap>
              <InputWrap>
                <ContactInput
                  type="email"
                  placeholder=""
                  name="email"
                  id="email_input"
                />
                <PlaceholderText className={values.email ? 'active' : null}>
                  Enter email*
                </PlaceholderText>

                <LoginFormError name="email" />
              </InputWrap>

              <FormBtn type="submit">Send</FormBtn>
            </ContactForm>
          );
        }}
      </Formik>
    </>
  );
}
