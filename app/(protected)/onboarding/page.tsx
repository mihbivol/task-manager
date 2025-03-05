import { userRequired } from "@/app/data/user/is-user-authenticated";
import { getUserWorkspaces } from "@/app/data/workspace/get-user-workspaces";
import OnboardingForm from "@/components/OnboardingForm";
import { redirect } from "next/navigation";

const page = async () => {
  const { user } = await userRequired();
  const { data } = await getUserWorkspaces();

  if (data?.onboardingCompleted && data?.workspaces?.length === 0) {
    redirect("/workspace");
  } else if (data?.onboardingCompleted) {
    redirect("create-workspace");
  }

  const name = `${user?.given_name || ""} ${user?.family_name || ""}`;

  return (
    <div className="">
      <OnboardingForm
        name={name}
        email={user?.email as string}
        image={user?.picture || ""}
      />
    </div>
  );
};

export default page;