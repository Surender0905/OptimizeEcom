import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input, { FormikInput } from '../components/Input';

const Register = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8).max(12).required('required'),
    cpassword: Yup.string().min(8).max(12).required('required'),
  });
  const initialValue = {
    email: '',
    password: '',
  };

  const callLoginApi = (values) => {
    console.log('api', values.email, values.password);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-600">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <Formik
              className="space-y-4 md:space-y-6"
              initialValues={initialValue}
              validationSchema={schema}
              onSubmit={callLoginApi}
              validateOnMount
            >
              <Form>
                <FormikInput
                  name="email"
                  type="text"
                  id="email"
                  placeholder="Email"
                />

                <FormikInput
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                />

                <FormikInput
                  name="cpassword"
                  type="cpassword"
                  id="cpassword"
                  placeholder="Confrim Password"
                />

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{' '}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
