import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function LoginForm() {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("email")} placeholder="Email" className="border p-2 w-full" />
      <input {...register("password")} type="password" placeholder="Password" className="border p-2 w-full" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Login</button>
    </form>
  );
}
