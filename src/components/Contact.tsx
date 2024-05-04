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
				<div className="flex mt-5">
					<span
						className="inline-flex items-center px-3 text-sm text-gray-900 bg-primary border rounded-e-0 border-primary border-e-0 rounded-s-md"
					>
						<span className="material-symbols-outlined">
							account_circle
						</span>
					</span>
					<input
						type={"text"}
						className="rounded-none rounded-e-lg bg-transparent border block flex-1 min-w-0
						w-full text-sm border-gray-300 p-2.5 focus-visible:outline-none focus:border-primary text-white"
						placeholder={"Votre nom"}
						{...register('last_name', { required: true })}
					/>
				</div>
				<div className="flex mt-5">
					<span
						className="inline-flex items-center px-3 text-sm text-gray-900 bg-primary border rounded-e-0 border-primary border-e-0 rounded-s-md"
					>
						<span className="material-symbols-outlined">
							account_circle
						</span>
					</span>
					<input
						type={"text"}
						className="rounded-none rounded-e-lg bg-transparent border block flex-1 min-w-0
						w-full text-sm border-gray-300 p-2.5 focus-visible:outline-none focus:border-primary text-white"
						placeholder={"Votre prénom"}
						{...register('first_name', { required: true })}
					/>
				</div>
			</div>

			<div className="flex mt-5">
					<span
						className="inline-flex items-center px-3 text-sm text-gray-900 bg-primary border rounded-e-0 border-primary border-e-0 rounded-s-md"
					>
						<span className="material-symbols-outlined">
							mail
						</span>
					</span>
				<input
					type={"text"}
					className="rounded-none rounded-e-lg bg-transparent border block flex-1 min-w-0
						w-full text-sm border-gray-300 p-2.5 focus-visible:outline-none focus:border-primary text-white"
					placeholder={"Votre email"}
					{...register('email', { required: true })}
				/>
			</div>

			<div className={"md:flex md:justify-between md:items-center mt-5"}>
				<textarea
					className="rounded-none rounded-e-lg bg-transparent border block flex-1 min-w-0
						w-full text-sm border-gray-300 p-2.5 focus-visible:outline-none focus:border-primary text-white"
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