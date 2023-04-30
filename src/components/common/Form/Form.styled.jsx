import { HomeBtn2, TeamTextM } from 'components/sections';
import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';
import { ReactComponent as ErrorSvg } from 'images/form/worning.svg';

export const ContactForm = styled(Form)``;

export const InputWrap = styled.div`
  position: relative;
`;

export const ContactInput = styled(Field)`
  display: block;
  height: 56px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-bottom: 20px;
  padding-left: 8px;
  &:focus ~ span {
    transform: translateY(-40px);
    transition: transform 200ms ${p => p.theme.trFunction};
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 25px;
  }
`;

export const PlaceholderText = styled.span`
  pointer-events: none;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.44;
  color: #808080;
  position: absolute;
  top: 16px;
  left: 8px;
  &.active {
    transform: translateY(-40px);
    transition: transform 200ms ${p => p.theme.trFunction};
  }
`;

export const ErrorText = styled(TeamTextM)`
  display: flex;
  width: 100%;
  font-size: 14px;
  align-items: center;
  align-self: center;
  position: absolute;
  color: red;
  top: 100%;
  left: 50%;
  transform: translateX(-25%);
`;

export const FormBtn = styled(HomeBtn2)`
  width: 155px;
  height: 57px;
  &:hover {
    background-color: #2ebf4f;
    color: ${p => p.theme.colors.white};
  }
  @media screen and (min-width: 1360px) {
    margin-top: 40px;
  }
`;
export const ErrorSvgStyled = styled(ErrorSvg)`
  align-self: center;
  margin-right: 5px;
`;

export const LoginFormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <ErrorText>
          <ErrorSvgStyled />
          {message}
        </ErrorText>
      )}
    />
  );
};
