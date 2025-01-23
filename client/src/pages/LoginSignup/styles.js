import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6; /* Equivalent to Tailwind's bg-gray-100 */
  padding: 1.5rem;
  animation: fade-in 0.5s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #b88e2f;
`;

export const FormWrapper = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  animation: slide-up 0.5s ease-in-out;

  @keyframes slide-up {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputField = styled.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db; /* Equivalent to Tailwind's border-gray-300 */
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #d97706; /* Equivalent to Tailwind's amber-500 */
    box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.3);
  }
`;

export const SubmitButton = styled.button`
  background-color: #b88e2f;
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #9e7c26; /* Darker shade */
  }
`;

export const Separator = styled.div`
  margin: 1rem 0;
  text-align: center;
  color: #6b7280; /* Equivalent to Tailwind's text-gray-600 */
`;

export const AdminCredentials = styled.div`
  margin-top: 1.5rem;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  h2 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.25rem 0;

    span {
      font-weight: bold;
    }
  }
`;

export const FooterText = styled.p`
  a {
    color: #b88e2f;
    text-decoration: underline;
    font-weight: bold;

    &:hover {
      color: #9e7c26; /* Darker shade */
    }
  }
`;
