import React from 'react';
import {
  ContactFormHolder,
  ContactImgHolder,
  ContactSection,
  ContactTextL,
} from './Contact.styled';
import Form from 'components/common/Form/Form';

export default function Contact() {
  return (
    <ContactSection id="contact">
      <ContactImgHolder></ContactImgHolder>
      <ContactFormHolder>
        <ContactTextL>Request Callback</ContactTextL>
        <Form />
      </ContactFormHolder>
    </ContactSection>
  );
}
