"use client"
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  const [submitting, setSubmitting] = useState(false);
  const [mailError, setMailError] = useState(null);
  const [mailSuccess, setMailSuccess] = useState(null);
  const form = useRef();

  const schema = yup.object().shape({
    user_name: yup.string().required("Please enter your name."),
    user_email: yup.string().lowercase().email("Please enter a valid e-mail adress.").required("Please enter your e-mail adress."),
    body: yup.string().max(250, "Your message can be a maximum of 250 characters long.").required("Please enter a message."),
  }).required();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema),});

  async function onSubmit(data, event) {
    setSubmitting(true);
    setMailError(null);
    event.preventDefault();
    console.log(data);

    try {
      const response = await emailjs.sendForm(`${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`);

      if (response.status === 200) {
        setMailSuccess("Your message was succesfully sent!");
        reset();
      }

    } catch (error) {
      console.log(error);
      setMailError("An error occured while delivering your message, please try again.");

    } finally {
      setSubmitting(false);
    }
  }

  return(
    <form ref={form} className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      {mailSuccess && <span>{mailSuccess}</span>}
      {mailError && <span>{mailError}</span>}

      <fieldset disabled={submitting}>
        <div className={styles.contactFormErrorHolder}>
          {errors.user_name && <span>{errors.user_name.message}</span>}
        </div>
        <input name="user_name" placeholder="Your name" {...register("user_name")} />

        <div className={styles.contactFormErrorHolder}>
          {errors.user_email && <span>{errors.user_email.message}</span>}
        </div>
        <input name="user_email" placeholder="Your e-mail" {...register("user_email")} />

        <div className={styles.contactFormErrorHolder}>
          {errors.body && <span>{errors.body.message}</span>}
        </div>
        <textarea name="body" placeholder="Your message" {...register("body")} />

        <button>Submit</button>
      </fieldset>
    </form>
  )
}