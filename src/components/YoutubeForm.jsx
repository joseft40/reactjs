import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: ""
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required')
})

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage name='name' component="div"/>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name='email' component="div"/>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="Youtube channel name"
          />
          <ErrorMessage name='channel' component="div"/>
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field
            as="textarea"
            id="comments"
            name="comments"
            placeholder="Comments"
          />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field
            name="address"
          >
            {props => {
              const {field, form, meta} = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              )
            }}
          </Field>
        </div>
        <button>Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
