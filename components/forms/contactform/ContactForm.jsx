"use client"
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ContactForm() {

  const schema = yup.object().shape({
    name: yup.string().required("Please enter a name."),
    email: yup.string().lowercase().email("Please enter a valid e-mail adress.").required("Please enter an e-mail adress."),
    body: yup.string().max(250, "Your message can be a maximum of 250 characters long.").required("Please enter a message."),
  }).required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema),});

  function onSubmit(data) {
    console.log(data);
  }

  return(
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        {errors.name && <span>{errors.name.message}</span>}
        <input name="name" placeholder="Your name" {...register("name")} />

        {errors.email && <span>{errors.email.message}</span>}
        <input name="email" placeholder="Your e-mail" {...register("email")} />

        {errors.body && <span>{errors.body.message}</span>}
        <textarea name="body" placeholder="Your message" {...register("body")} />

        <button>Submit</button>
      </fieldset>
    </form>
  )
}