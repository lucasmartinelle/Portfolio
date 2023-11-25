'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
	first_name: string;
	last_name: string;
	email: string;
	message: string;
};

const Contact: FC = () => {
	const {register, handleSubmit} = useForm<FormData>();

	function onSubmit(data: FormData) {
		sendEmail(data);
	}

	return (
		<form className={"text-center"} onSubmit={handleSubmit(onSubmit)}>
			<div className={"md:flex md:justify-between md:items-center md:gap-3"}>
				<input
					type={"text"}
					className={"w-full bg-transparent border-2 rounded-xl px-3 py-1 text-white placeholder:text-white placeholder:text-opacity-50 mt-5"}
					placeholder={"Votre nom..."}
					{...register('first_name', { required: true })}
				/>
				<input
					type={"text"}
					className={"w-full bg-transparent border-2 rounded-xl px-3 py-1 text-white placeholder:text-white placeholder:text-opacity-50 mt-5"}
					placeholder={"Votre prénom..."}
					{...register('last_name', { required: true })}
				/>
			</div>
			<div className={"md:flex md:justify-between md:items-center"}>
				<input
					type={"email"}
					className={"w-full bg-transparent border-2 rounded-xl px-3 py-1 text-white placeholder:text-white placeholder:text-opacity-50 mt-5"}
					placeholder={"Votre email..."}
					{...register('email', { required: true })}
				/>
			</div>
			<div className={"md:flex md:justify-between md:items-center"}>
				<textarea
					className={"w-full bg-transparent border-2 rounded-xl px-3 py-1 text-white placeholder:text-white placeholder:text-opacity-50 mt-5"}
					rows={10}
					placeholder={"Votre message..."}
					{...register('message', { required: true })}
				></textarea>
			</div>
			<button className={"bg-primary p-3 py-1 rounded-md max-w-fit mt-5"}>Envoyer</button>
		</form>
	)
}

export default Contact;