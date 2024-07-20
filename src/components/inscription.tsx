import Input from "./input";
import { MdOutlineEmail } from "react-icons/md";
import Button from "./button";
import { IoIosLock } from "react-icons/io";
import React, { useState } from "react";
import axios from "axios";
/*
"name" :  "patate",
"email" : "worketyamo.dev@gmail.com",
"password" :  "fkdjng6765",
*/
const URL = "http://localhost:3000";

const FormulaireInscription = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${URL}/users/login`,

        {
          email,
          password,
        },

        {
          withCredentials: true,
        },
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={"py-32  px-20 flex-1 flex flex-col w-full h-full text-[2rem]"}
    >
      <h1 className="text-6xl flex-1  font-semibold">Connexion à Blue Ocean</h1>
      <form
        onSubmit={handleSubmit}
        className="flex h-full flex-col justify-center gap-10 w-full flex-3 "
      >
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          id="email"
          icon={<MdOutlineEmail size={30} color="#d9d9d9" />}
          placeholder="abc@example.com"
          name="Email"
          label="Adresse Email"
        />

        <Input
          icon={<IoIosLock size={30} color="#d9d9d9" />}
          placeholder="***************"
          name="password"
          label="Mot de passe"
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="underline text-right font-semibold text-[1.6rem] text-primary">
          <a href="#">Mot de Passe Oublié ? </a>
        </p>
        <Button name="Connexion" type="submit" />
      </form>
      <div className="flex h-full w-full flex-1 flex-row bg-red-700"></div>
    </div>
  );
};
export default FormulaireInscription;
