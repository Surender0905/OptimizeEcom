import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';

const Register = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8).max(12).required('required'),
  });
  const initialValue = {
    email: '',
    password: '',
  };

  const callLoginApi = (values) => {
    console.log('api', values.email, values.password);
  };
  return (
    <section>
      <h1>Register</h1>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={callLoginApi}
        validateOnMount
      >
        <Form className="border border-cyan-400">
          <Input
            label="email"
            id="email"
            name="email"
            type={'text'}
            required
            autoComplete={'email'}
            placeholder={'Email '}
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="text"
            required
            placeholder={'Password '}
          />
        </Form>
      </Formik>
    </section>
  );
};

export default Register;
