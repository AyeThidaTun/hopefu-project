type Props = {
  user: {
    email: string;
    full_name: string;
    avatar_url?: string;
  };
};

export default function ProfileCard({ user }: Props) {
  return (
    <section className="">
        <div className="flex flex-row items-center gap-x-10">
          <div className="">
            <img src={"https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135628/11_jdqruu.png"} alt="Avatar" className="rounded-full w-25 lg:w-40"/>
          </div>
          <div className="text-sm lg:text-base">
            <p>Username: {user?.full_name}</p>
            <p>Email: {user?.email} </p>
          </div>
        </div>
    </section>
  );
}
