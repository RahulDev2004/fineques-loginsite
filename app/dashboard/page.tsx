'use client';

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import {useEffect} from "react";

const Dashboard: React.FC = () => {

    const {user, error, isLoading } = useUser();
    const router = useRouter();

    useEffect(()=>{
      if (!user){
        router.replace("/")
      }
    }, [user])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    return (
      <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        title="ALL CHANNEL DASHBOARD"
        style={{ width: '100%', height: '100%' }}
        src="https://app.powerbi.com/reportEmbed?reportId=e37360c8-956a-4fc4-a932-1384cc2c64ab&autoAuth=true&ctid=d2c967e6-4fc7-452c-9e79-f78c68ccf915"
        allowFullScreen
      ></iframe>
    </div>
    )
  };
  
  export default Dashboard;