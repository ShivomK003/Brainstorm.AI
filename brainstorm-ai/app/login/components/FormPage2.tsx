import React from "react";
import Box from "@/lib/components/layout/Box";
import { Heading } from "@/lib/components/text-styles/Heading";
import { Body } from "@/lib/components/text-styles/Body";
import PrimaryButton from "@/lib/components/Buttons/PrimaryButton";
import Image from "next/image";
import googleIcon from "@/public/assets/images/Google__G__logo.svg.webp";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { useLoginForm } from "@/Context/LoginFormContext";
import { useAlert } from "@/lib/components/Alert/AlertProvider";

function FormPage2() {
  const { email, password, setPassword, showPassword, setShowPassword, previousPage } = useLoginForm();

  const { showAlert } = useAlert();

  const handlePrevious = () => {
    previousPage();
  };

  const handleLogin = () => {
    // TODO: Implement login logic
    showAlert({
      title: "Login",
      description: `Welcome back, ${email}!`,
      variant: "success",
    });
  };

  return (
    <Box className="w-full h-full flex flex-col justify-center">
      <Box className="w-full h-full flex items-center">
        <button
          className="w-full flex items-center justify-start text-[#FAA600] mb-1 text-sm "
          onClick={handlePrevious}>
          {<ArrowLeftIcon className="w-4 h-4 mr-1" />} Back
        </button>
      </Box>
      <Box className="w-full h-full mt-2 flex flex-col justify-center">
        <Heading className="text-[32px] mb-2 tracking-wide">Enter your password</Heading>
        <Body className="text-white/80 mb-3">{email}</Body>
      </Box>
      <Box className="w-full mb-6 flex flex-col">
        <label className="text-white/80 mb-1 text-sm">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="
                w-full px-4 py-3 pr-10 rounded-lg 
                bg-white/10 border border-white/20 
                text-white placeholder-white/40
                focus:outline-none focus:ring-2 focus:ring-[#E9395E]
              "
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-white/80 hover:text-white transition-colors">
            {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
          </button>
        </div>
      </Box>
      <PrimaryButton buttonText="Login" className="w-full" onClick={handleLogin} />
    </Box>
  );
}

export default FormPage2;
