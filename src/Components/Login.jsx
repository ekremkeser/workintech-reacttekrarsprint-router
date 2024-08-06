import { useForm } from 'react-hook-form';
import {useHistory} from "react-router-dom";

const initialForm = {
  name: '',
  email: '',
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: initialForm, mode: 'onChange' });

  const history = useHistory();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    history.push('/products')
  };

  return (
    <>
      <div className="App">
        <h2> React Hook Form Workspace</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', {
                required: 'name is required',
                maxLength: {
                  value: 8,
                  message: 'Too Many Characters',
                },
              })}
            />
          </div>
          {errors.name && <p>{errors.name.message}</p>}

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
            />
          </div>
          {errors.email && <p>{errors.email.message}</p>}

          {isSubmitting ? 'loading...' : <input type="submit" />}
        </form>
      </div>
    </>
  );
}

export default Login;
