import LogIn from "@/components/account/LogIn";
import { IUser } from "@/interface/IUser";

const LogInPage = (props) => {
  console.log(props);
  return <LogIn />;
};

export default LogInPage;

export async function getStaticProps() {
  const user = {
    name: "Raymart Formalejo",
    email: "raymartformalejo@gmail.com",
  };
  return {
    props: {
      user: user,
    },
  };
}