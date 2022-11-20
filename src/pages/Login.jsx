import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormikInput } from '../components/Input';

const Login = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required(),
    password: Yup.string().min(8).max(12).required(),
  });
  const initialValue = {
    email: '',
    password: '',
  };

  const callLoginApi = (values) => {
    console.log('api', values.email, values.password);
  };
  return (
    <div>
      <p>Login</p>

      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={callLoginApi}
        validateOnMount
      >
        <Form>
          <FormikInput name="email" type="text" id="email" />
          <FormikInput name="password" id="password" type="password" />
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
