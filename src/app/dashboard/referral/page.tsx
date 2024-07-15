"use client";
import { useReferrals } from "@/hooks/useReferral";
import { ReferralCon } from "@/components/containers";
import { SearchType } from "@/shares/types/search";
import { getSession } from "@/services/auth/services/getSession";
import { useEffect, useState } from "react";
import { columns } from "./type";

const Referral = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const referral: SearchType = {
    filter: `referrer_id=${session?.id}`,
    limit: 10,
    page: currentPage,
    sort: "newest",
  };

  const { collectData, totalData } = useReferrals(referral);

  return (
    <ReferralCon
      title="Invite Another Hopper!"
      columns={columns}
      data={collectData}
      totalData={totalData}
      limit={10}
      refCode={session?.refCode}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Referral;
