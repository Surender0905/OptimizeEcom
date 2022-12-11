import axios from 'axios';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import WithUser from '../components/HOC/WithUser';
import Input from '../components/Input';

const schema = Yup.object().shape({
  fullName: Yup.string(),
  email: Yup.string().email('Invalid email address').required(),
  password: Yup.string().min(8).max(12).required(),
});
const initialValue = {
  fullName: '',
  email: '',
  password: '',
};
const callLoginApi = async (values, bag) => {
  await axios
    .post('https://myeasykart.codeyogi.io/signup', {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem('token', token);

      bag.props.setUser(user);
    })
    .catch((error) => console.log(error));
};

const Register = ({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-600">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>

            <form onSubmit={handleSubmit}>
              <Input
                name="fullName"
                id="fullName"
                type="test"
                required
                label="Full Name"
                placeholder="Full Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                touched={touched.fullName}
                errors={errors.fullName}
              />
              <Input
                name="email"
                type="email"
                id="email"
                autoComplete="email"
                label="Email"
                required
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                touched={touched.email}
                errors={errors.email}
              />

              <Input
                name="password"
                id="password"
                type="password"
                required
                label="Password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                touched={touched.password}
                errors={errors.password}
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
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const inhancedForm = withFormik({
  initialValue: initialValue,
  validationSchema: schema,
  handleSubmit: callLoginApi,
})(Register);

export default WithUser(inhancedForm);
