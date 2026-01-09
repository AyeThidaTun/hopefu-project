import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import type { User } from "@supabase/supabase-js";
import Navbar from "@/components/navbar";
import ProfileCard from "./_components/profile-card";
import ProfileTabs from "./_components/profile-tab";

export function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error(error);
        return;
      }

      setUser(data.user);
      setLoading(false);
    };

    getUser();
  }, []);

  if (loading)
    return (
      <div className="">
        <Navbar />
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="">
      <Navbar />
      <div className="px-5 lg:px-70 py-10">
        <div className="border border-gray-300 rounded-md p-10">
          <ProfileCard
            user={
              user?.user_metadata as {
                email: string;
                full_name: string;
                avatar_url?: string;
              }
            }
          />
          <ProfileTabs />
        </div>
      </div>
    </div>
  );
}
