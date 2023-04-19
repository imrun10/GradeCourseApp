import Userfront from "@userfront/react";

Userfront.init("6bg44jvn");

const SignupForm = Userfront.build({
  toolId: "mlnbrld"
});

export default function SignUp() {
  return <SignupForm />;
};